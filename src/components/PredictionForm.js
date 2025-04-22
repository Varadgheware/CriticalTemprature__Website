import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PredictionForm = () => {
  const [molecularFormula, setMolecularFormula] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // Fetch prediction from database by molecular formula
      const response = await fetch(`http://localhost:5000/api/predictions/${encodeURIComponent(molecularFormula)}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Molecular formula not found in database');
        }
        throw new Error('Failed to fetch prediction');
      }

      const predictionData = await response.json();
      navigate('/model', { 
        state: { 
          predictedTemp: predictionData.Predicted_T_c,
          actualTemp: predictionData.Actual_T_c,
          formula: predictionData.Material
        } 
      });
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handlePredict}>
        <label>Molecular formula:</label>
        <input
          type="text"
          value={molecularFormula}
          onChange={(e) => setMolecularFormula(e.target.value)}
          required
          placeholder="Enter Molecular Formula (e.g. Ba0.2La1.8Cu1O4)"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Predict Temperature"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default PredictionForm;
