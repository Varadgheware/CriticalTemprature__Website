import React from "react";
import { Routes, Route } from "react-router-dom";
import PredictionPage from "./components/PredictionPage";
import Contact from "./components/Contact";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";

function App() {
  return (
      <div className="App">
        <video className="background-video" autoPlay loop muted>
          <source src="/13232-246463976_medium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Navbar />
        <Routes>
          <Route path="/" element={<PredictionPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/model" element={<Result />} />
        </Routes>
      </div>
  );
}

export default App;
