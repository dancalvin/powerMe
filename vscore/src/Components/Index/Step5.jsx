import React from "react";
import { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import CircleModel from "./CircleModel/CircleModel";
import { RangeSliderModul } from "./RangeSlider/RangeSliderModul";
import VitalityScore from "./VitalityScore";
import calcMetaAge from "./CircleModel/metaCalc.js";


export default function Step5({ form, setInput }) {
  const [ageCalculated, setCalcAge] = useState(10);
  useEffect(() => 
  {
    setCalcAge(calcMetaAge(form.age, form.pressure, form.hdl, form.trigl,form.glucose,form.waist,form.diastolicBP));
  });
  
  return (
    <>
      <div className="step__outer">
        <VitalityScore
          form={form}
          score={0}
          title="Your Vitality Score Is:"
          image="/images/graph.png"
          clName="vitality"
        />
        <a href="#" className="button primary large">
          View History
        </a>

        
        <div className="step fifth">
          <div className="doterraRow">
            <div className="doterraColumn">
              <h2>Your Metabolic Age </h2>
              <h1 className="bigNumber darkBlue">{ageCalculated}</h1>
              <h2>Your Calendar Age </h2>
              <h1 className="bigNumber lightBlue">{form.age}</h1>
            </div>
            <div className="doterraColumn">
            {/*<CircleModel metabolicAge={<MetabolicAgeCalculator {...form}/>} actualAge={form.age}/>*/}
            <CircleModel metabolicAge={ageCalculated} actualAge={form.age}/>
            </div>
          </div>
        </div>

        <div className="step">
          <h2>What Your Results Mean </h2>
          <h3 className="light">
          Your Vitality Score indicates your current metabolic health status compared to other adults in the US population. 
            <br />
            <br />
              A score of 50 suggests that you are of average health and have an average risk for developing metabolic health problems in the future.  The higher your score, suggests better overall metabolic health.  The good news is that healthy lifestyle changes and smart supplementation can improve your Vitality Score over time. 
          </h3>
        </div>

        <div className="step fourth">
          <VitalityScore
            score={1}
            form={form}
            title="Your Vitality Score Could Be"
            image="/images/graph2.png"
            clName="vitality new"
          />
          <h3 className="med">Weight</h3>
          <RangeSlider
            {...RangeSliderModul[4]}
            value={form.newWeight}
            onChange={setInput("newWeight")}
            unit=" lbs."
          />
          <h3 className="med">Waist</h3>
          <RangeSlider
            {...RangeSliderModul[6]}
            value={form.newWaist}
            onChange={setInput("newWaist")}
            unit=" in."
          />
          <h3 className="med">Systolic Blood Pressure (mmHg)</h3>
          <RangeSlider
            {...RangeSliderModul[0]}
            value={form.newPressure}
            onChange={setInput("newPressure")}
            clName="rangeSlider new pressure"
            unit=" mmHG"
          />
          <h3 className="med">Diastolic Blood Pressure (mmHg)</h3>
          <RangeSlider
            {...RangeSliderModul[5]}
            value={form.newDiastolicBP}
            onChange={setInput("newDiastolicBP")}
            clName="rangeSlider new diastolicBP"
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
        <button type="submit" className="button primary mirror">
          Save Your Goals
        </button>

        <button type="button" className="button primary clearDT mirror" >
        Share Your Results <img className="shareIcon" src={process.env.PUBLIC_URL + "/images/share.svg"} alt="share-icon"/>
      </button>
      <div className="manualGap" style={{padding: "20px"}}>
      </div>

        <div className="step add">
          <div className="step__image">
            <img
              src={process.env.PUBLIC_URL + "/images/powerme.png"}
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
