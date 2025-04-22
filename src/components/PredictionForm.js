import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PredictionForm = () => {
  const [atomicMass, setAtomicMass] = useState("");
  const navigate = useNavigate();

  const handlePredict = (e) => {
    e.preventDefault();
    const temp = (parseFloat(atomicMass) * 0.5).toFixed(2);
    navigate('/model', { state: { predictedTemp: temp } });
  };

  return (
    <div className="form-container">
      <form onSubmit={handlePredict}>
        <label>Molecular Mass:</label>
        <input
          type="number"
          value={atomicMass}
          onChange={(e) => setAtomicMass(e.target.value)}
          required
          placeholder="Enter Molecular Mass"
        />
        <button type="submit">Predict Temperature</button>
      </form>
    </div>
  );
};

export default PredictionForm;
