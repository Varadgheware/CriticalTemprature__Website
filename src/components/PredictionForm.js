import React, { useState } from "react";

const PredictionForm = () => {
  const [atomicMass, setAtomicMass] = useState("");
  const [predictedTemp, setPredictedTemp] = useState(null);

  const handlePredict = (e) => {
    e.preventDefault();
    // temmpp formulaee
    const temp = (parseFloat(atomicMass) * 0.5).toFixed(2);
    setPredictedTemp(temp);
  };

  return (
    <div className="form-container">
      <form onSubmit={handlePredict}>
        <label>Atomic Mass:</label>
        <input
          type="number"
          value={atomicMass}
          onChange={(e) => setAtomicMass(e.target.value)}
          required
          placeholder="Enter atomic mass"
        />
        <button type="submit">Predict Temperature</button>
      </form>
      {/* //for calculation */}
      
      {/* {predictedTemp && (
        <div className="result">
          <h3>Predicted Critical Temperature:</h3>
          <p>{predictedTemp} K</p>
        </div>
      )} */}
    </div>
  );
};

export default PredictionForm;
