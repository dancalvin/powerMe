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
          A score of 50 suggests that you have an average risk for developing metabolic health problems in the future.  A hihger score indicates better overall metabolic health anda  lower risk of developing future disease.  The good news is that healthy lifestyle changes and smart supplementation can improve your Vitality Score over time. 
        </p>
        <br />
        <span className ="finePrint">
        Vitality Score is based on algorithms developed by MetCalc.org. Ranges are based on NHAINES data gathered by CDC
        </span>
      </div>
      <button type="button" className="button primary" onClick={nextTab}>
        Continue
      </button>
    </>
  );
}
