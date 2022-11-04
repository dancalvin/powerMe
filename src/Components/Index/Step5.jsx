import React from "react";
import { useState, useEffect } from "react";
import ScoreLogic from "./ScoreLogic";



export default function Step5({ form, nextTab, setInput }) {

  return (
    <>
      <div className="step__outer">
        <div className="vitality__score">
          <h1 className="vitalityScoreText">Vitality Score</h1>
          <h1 className="big vitalityScoreNumber">{<ScoreLogic {...form} />}</h1>
        </div>
        <div className="step fifth">
          
          <h2>What Your Results Mean </h2>
          <h3 className="light">
            Your Vitality Score indicates your current metabolic health status compared to other adults in the US population. 
            <br />
            <br />
            A score of 50 suggests that you are of average health and have an average risk for developing metabolic health problems in the future.  The higher your score, suggests better overall metabolic health.  The good news is that healthy lifestyle changes and smart supplementation can improve your Vitality Score over time. 
          </h3>
        </div>
        <div className="step">
          <h2>How to Better Your Score</h2>
          <h3 className="light">
          Healthy lifestyle changes and smart supplementation can improve your Vitality Score over time.  
          <br />
          <br />
          If your goal is improved health then a good starting point is to talk with a doTERRA Wellness Advocate on supplementation options that may help you achieve your health goals.  Or click here, to learn more about Prime Meridian HealthCare’s Vitality Health Program.  This is an 18-week program that will help educate and provide guidance on improving Metabolic Health. 
          </h3>
        </div>
        <div className="step add">
          <h2>To Learn More</h2>
          <h3 className="light">
            To better understand your health,{" "}
            <a href="https://apps.powerme.health/shop">purchase a PowerMe Metabolic Health Kit</a>
          </h3>
          <h3 className="light">
            To find resources on bettering your health outcomes,{" "}
            <a href="http://powermeacademy.flywheelsites.com/">visit the PowerMe Academy</a>
          </h3>
        </div>
      </div>

      <button type="submit" className="button primary large">
        Download <span>Your</span> Vitality Score
      </button>
    </>
  );
}
