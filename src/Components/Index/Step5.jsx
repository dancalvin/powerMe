import React from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import { RangeSliderModul } from "./RangeSlider/RangeSliderModul";
import VitalityScore from "./VitalityScore";

export default function Step5({ form, setInput }) {
  return (
    <>
      <div className="step__outer">
        <VitalityScore
          form={form}
          score={0}
          title="Your Vitality Score Percentage Is:"
          image="images/graph.png"
          clName="vitality"
        />
        <a href="#" className="button primary large">
          View History
        </a>
        <div className="step fifth">
          <h2>What Your Results Mean </h2>
          <h3 className="light">
            Your Vitality Score indicates your current metabolic health status
            compared to other adults in the US population.
            <br />
            <br />A score of 50 suggests that you are of average health and have
            an average risk for developing metabolic health problems in the
            future. The higher your score, suggests better overall metabolic
            health. The good news is that healthy lifestyle changes and smart
            supplementation can improve your Vitality Score over time.
          </h3>
        </div>
        <div className="step">
          <VitalityScore
            score={1}
            form={form}
            title="Your Vitality Score Percentage Could Be"
            image="images/graph2.png"
            clName="vitality new"
          />
          <h3 className="med">Weight</h3>
          <RangeSlider
            {...RangeSliderModul[4]}
            value={form.newWeight}
            onChange={setInput("newWeight")}
            unit=" lbs."
          />
          <h3 className="med">Blood Pressure (mmHg)</h3>
          <RangeSlider
            {...RangeSliderModul[0]}
            value={form.newPressure}
            onChange={setInput("newPressure")}
            clName="rangeSlider new pressure"
            unit=" mmHG"
          />
          <h3 className="med">HDL (mg/dL)</h3>
          <RangeSlider
            {...RangeSliderModul[1]}
            value={form.newHdl}
            onChange={setInput("newHdl")}
            unit=" mg/dL"
            clName="rangeSlider new hdl"
          />
          <h3 className="med">Triglycerides (mg/dL)</h3>
          <RangeSlider
            {...RangeSliderModul[2]}
            value={form.newTrigl}
            onChange={setInput("newTrigl")}
            unit=" mg/dL"
            clName="rangeSlider new trigl"
          />
          <h3 className="med">Fasting Glucose (mg/dL)</h3>
          <RangeSlider
            {...RangeSliderModul[3]}
            value={form.newGlucose}
            onChange={setInput("newGlucose")}
            unit=" mg/dL"
            clName="rangeSlider new glucose"
          />
        </div>
        <button type="submit" className="button primary large">
          Retake Your Vitality Score
        </button>
        <div className="step add">
          <div className="step__image">
            <img
              src={process.env.PUBLIC_URL + "images/powerme.png"}
              alt="powerme"
            />
          </div>
          <div className="step__content">
            <h2>To Learn More</h2>
            <h3 className="light">
              To better understand your health,{" "}
              <a href="https://apps.powerme.health/shop">
                purchase a PowerMe Metabolic Health Kit
              </a>
            </h3>
            <h3 className="light">
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
