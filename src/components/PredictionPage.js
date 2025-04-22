import React from "react";
import PredictionForm from "./PredictionForm";
import "../styles/styles.css";

const PredictionPage = () => {
  return (
    <div className="prediction-container">
      <h1>Superconductor Critical Temperature Prediction</h1>
      <p>
        Enter the molecular formula to predict its critical temperature.
       
      </p>
      <div className="instructions">
        <p>
          <strong>Note:</strong> Please enter the exact molecular formula for accurate results.
        </p>
      </div>
      <PredictionForm />
    </div>
  );
};

export default PredictionPage;
