import React from "react";

export default function Step1({ nextTab }) {
  return (
    <>
      <div className="step first">
        <h2>Welcome to the Vitality Score Calculator</h2>
        <p>
          Your Vitality Score indicates your current metabolic health status compared to other adults in the US population.
          <br />
          <br />
          A score of 50 suggests that you are of average health and have an average risk for developing metabolic health problems in the future.  The higher your score, suggests better overall metabolic health.  The good news is that healthy lifestyle changes and smart supplementation can improve your Vitality Score over time. 
        </p>
      </div>
      <button type="button" className="button primary" onClick={nextTab}>
        Continue
      </button>
    </>
  );
}
