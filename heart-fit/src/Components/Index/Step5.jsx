import React from "react";
import { share } from "../Base/SVG";
import RangeSlider from "./RangeSlider/RangeSlider";
import { RangeSliderModul } from "./RangeSlider/RangeSliderModul";

export default function Step5({
  nextTab,
  goToTab,
  setInput,
  updateForm,
  form,
}) {
  const HeartFitScore = 35;
  const min = 25;
  const max = 49.1;
  const style = (HeartFitScore - min) * (100 / (max - min));

  return (
    <>
      <div className="step__outer">
        <div className="step fifth">
          <div className="heartFit goal">
            <h2 className="h2 sm">Your Heart-Fit Score Is:</h2>
            <h1 className="h1 uniq">{HeartFitScore}</h1>
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
          </div>
          <h3 className="h3 med">Mile Time</h3>
          <RangeSlider
            {...RangeSliderModul[2]}
            value={form.newTime}
            onChange={setInput("newTime")}
            unit=" min."
            plus={true}
          />
          <h3 className="h3 med">Weight</h3>
          <RangeSlider
            {...RangeSliderModul[1]}
            value={form.newWeight}
            onChange={setInput("newWeight")}
            unit=" lbs."
            plus={true}
          />
        </div>
        <div className="steps__inner-goals-btns">
          <button
            type="submit"
            className="button primary mirror"
            onClick={nextTab}
          >
            Save Your Goals
          </button>

          <button type="button" className="button primary clearDT mirror share">
            Share <span>Your Goals</span>
            {share}
          </button>
        </div>
        <div className="step add">
          <div className="step__image">
            <img
              src={process.env.PUBLIC_URL + "images/powerme.png"}
              alt="powerme"
            />
          </div>
          <div className="step__content">
            <h2 className="h2">To Learn More</h2>
            <h3 className="h3 light">
              To better understand your health,{" "}
              <a href="https://apps.powerme.health/shop">
                purchase a PowerMe Metabolic Health Kit
              </a>
            </h3>
            <h3 className="h3 light">
              To find resources on bettering your health outcomes,{" "}
              <a href="http://powermeacademy.flywheelsites.com/">
                visit the PowerMe Academy
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
