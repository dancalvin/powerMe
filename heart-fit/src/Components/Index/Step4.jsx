import React, { useState, useEffect } from "react";
import { share } from "../Base/SVG";
import HeartFitScore from "./HeartFitScore";
import { GoalsToShare } from "./Step5";
export default function Step4({ form, nextTab, goToTab, jump }) {
  const [shareResultsPopup, setShareResultsPopup] = useState(false);
  /*const HeartFitScore = 35;
  const min = 25;
  const max = 49.1;
  const style = (HeartFitScore - min) * (100 / (max - min));
  */
  return (
    <>
      <div className="step__outer">
        {/*
        <div className="heartFit">
          <h2 className="h2">Your Heart-Fit Score Is:</h2>
          <h1 className="h1 big">{HeartFitScore}</h1>
          <div className="heartFit__inner">
            <div className="heartFit__inner-progress">
              <div className="heartFit__inner-progress-dot"></div>
              <div className="heartFit__inner-progress-dot"></div>
              <div className="heartFit__inner-progress-dot"></div>
              <div className="heartFit__inner-progress-dot"></div>
              <div className="heartFit__inner-progress-dot"></div>
              <span
                className="heartFit__line"
                style={{
                  left: style + "%",
                  transform: `translateX(-${style}%)`,
                }}
              >
                <span className="heartFit__score">{HeartFitScore}</span>
              </span>
            </div>
            <div className="heartFit__inner-marks">
              <div className="heartFit__inner-mark">Very Poor</div>
              <div className="heartFit__inner-mark">Poor</div>
              <div className="heartFit__inner-mark">Fair</div>
              <div className="heartFit__inner-mark">Good</div>
              <div className="heartFit__inner-mark">Excellent</div>
              <div className="heartFit__inner-mark">Superior</div>
            </div>
            <span className="heartFit__min">{min}</span>
            <span className="heartFit__max">{max}</span>
          </div>
          <h3 className="h3 bold">
            Your Heart-Fit Score is xx better than xx {HeartFitScore}% of peers.
          </h3>
        </div>
        */}

        <HeartFitScore form={form} />
        <div className="step res">
          <h2 className="h2">What Your Results Mean </h2>
          <h3 className="h3 light">
            Your Heart-Fit Score indicates your current cardiovascular health
            according to Rockport Mile calculations. A higher score suggests
            better overall cardiovascular health. The good news is that healthy
            lifestyle changes and smart supplementation can improve your
            Heart-Fit Score over time.
          </h3>
        </div>
      </div>
      <div className="steps__inner-result-btns">
        <button
          type="submit"
          className="button primary mirror !w-full"
          onClick={nextTab}
        >
          Set Goals
        </button>

        <button
          type="button"
          className="button primary clearDT mirror share !w-full"
          onClick={() => setShareResultsPopup(true)}
        >
          Share <span>Your Results</span>
          {share}
        </button>
        <div className="button__row">
          <button
            type="button"
            onClick={() => {
              goToTab(0);
            }}
            className="button primary clearDT"
          >
            Retake Test
          </button>
          <button
            type="button"
            className="button primary clearDT"
            onClick={() => {
              goToTab(5);
            }}
          >
            View <span>Your Heart-Fit</span> History
          </button>
        </div>
        {shareResultsPopup ? (
          <GoalsToShare form={form} setShareGoalsPopup={setShareResultsPopup} />
        ) : null}
      </div>
    </>
  );
}
