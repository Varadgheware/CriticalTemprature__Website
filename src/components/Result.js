import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Result.css";

const Result = () => {
  const location = useLocation();
  const predictedTemp = location.state?.predictedTemp || "No prediction available";

  return (
    <div className="result-container">
      <div className="result-card">
        <h2>Temperature Prediction Results</h2>
        <div className="result-details">
          <div className="result-item">
            <h3>Predicted Critical Temperature:</h3>
            <p className="temperature">{predictedTemp} K</p>
          </div>
          <div className="result-info">
            <p>This prediction is based on the molecular mass provided.</p>
            <p>Note: Results may vary based on actual experimental conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
