import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Result.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [historicalPredictions, setHistoricalPredictions] = useState([]);
  
  const formula = location.state?.formula || "Unknown";
  const predictedTemp = location.state?.predictedTemp || "No prediction available";
  const actualTemp = location.state?.actualTemp || "Not available";

  useEffect(() => {
    // If we don't have state data, user probably navigated directly to this page
    if (!location.state) {
      navigate('/');
      return;
    }
    
    const fetchHistoricalPredictions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/predictions');
        if (!response.ok) {
          throw new Error('Failed to fetch historical predictions');
        }
        const data = await response.json();
        setHistoricalPredictions(data);
      } catch (error) {
        console.error('Error fetching historical predictions:', error);
      }
    };

    fetchHistoricalPredictions();
  }, [location.state, navigate]);

  return (
    <div className="result-container">
      <div className="result-card">
        <h2>Temperature Prediction Results</h2>
        <div className="result-details">
          <div className="result-item">
            <h3>Material Formula:</h3>
            <p className="formula">{formula}</p>
          </div>
          <div className="result-item">
            <h3>Predicted Critical Temperature:</h3>
            <p className="temperature">{predictedTemp} K</p>
          </div>
          {actualTemp !== "Not available" && (
            <div className="result-item">
              <h3>Actual Critical Temperature:</h3>
              <p className="temperature">{actualTemp} K</p>
            </div>
          )}
          <div className="result-info">
            <p>This prediction is based on our database of superconducting materials.</p>
            <p>Note: Results may vary based on actual experimental conditions.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Result;
