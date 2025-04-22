import React from "react";
import PredictionForm from "./PredictionForm";
import "../styles/styles.css";

const PredictionPage = () => {
  return (
    <div className="prediction-container">
      <h1>Superconductor Critical Temperature Prediction</h1>
      <p>Enter the element's molecular mass to predict its critical temperature.</p>
      <PredictionForm />
    </div>
  );
};

export default PredictionPage;
