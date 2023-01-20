import React, { useState, useEffect } from "react";

import { H1, H2, H3, P, P2 } from "../../components/Typography";
import VitalityScoreGraph from "./VitalityHistory/VitalityScoreGraph";
import { FilledButton, OutlinedButton } from "../../components/Buttons";
import {
  InputLabel,
  InputField,
  InputCheckbox,
  InputRadio,
  InputRangeSlider,
} from "../../components/Inputs";

import { StepWrapper } from "../../layouts/Steps";
import LearnMoreBlock from "../../layouts/LearnMoreBlock";

import VitalityScore from "./VitalityScore";
import VitalityScoreResultsPopup from "./VitalityScoreResultsPopup";
import VitalityScoreGoalsPopup from "./VitalityScoreGoalsPopup";

import { getMetaAge } from "../../utils";
import { RangeSliderModuleForVitalScore as RangeSliderModule } from "../../utils/DataStore";

import Graph from "../../assets/images/graph.png";
import Graph2 from "../../assets/images/graph2.png";
import { share } from "../../components/Svgs";

export default function Step5({
  form,
  setInput,
  setInputDirect,
  nextTab,
  saveYourGoals,
  stepNo,
}) {
  const [metaAge, setMetaAge] = useState(0);
  const [shareResultsPopup, setShareResultsPopup] = useState(false);
  const [shareGoalsPopup, setShareGoalsPopup] = useState(false);
  useEffect(() => {
    const metaAgeData = getMetaAge({ ...form });
    setMetaAge(metaAgeData);
  });

  return (
    <div>
      {/* vitality score */}
      <div>
        <VitalityScore
          form={form}
          score={0}
          title="Your Vitality Score Is:"
          image={Graph}
          clName="vitality"
        />
      </div>

      {/* your metallic/calendar age section */}

      <div className="mt-16">
        <StepWrapper no={stepNo}>
          <div
            className={`flex w-full grow flex-col-reverse flex-nowrap justify-between gap-7 lg:flex-row lg:gap-0`}
          >
            <div className="flex flex-row justify-between md:gap-10 lg:flex-col">
              <div className=" md:border-0">
                <h3 className="font-montserrat text-base leading-[39px] text-primary md:text-3xl">
                  Your Metabolic Age{" "}
                </h3>

                <p className="md:text-normal font-montserrat text-[40px] font-bold leading-[110%] text-primary md:text-[80px] md:font-normal md:leading-[98px] ">
                  {metaAge}
                </p>
              </div>

              <div>
                <h3 className="font-montserrat text-base leading-[39px] text-[#7C5D7A] md:text-3xl">
                  Your Calendar Age{" "}
                </h3>
                <p className="md:text-normal font-montserrat text-[40px] font-bold leading-[110%] text-[#7C5D7A] md:text-[80px] md:font-normal md:leading-[98px]">
                  {form.age}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative mx-auto min-h-[200px] min-w-[200px] grow sm:min-h-[300px] sm:min-w-[300px] ">
                <VitalityScoreGraph value1={metaAge} value2={form.age} />

                <div className="absolute right-0 left-0 top-0 bottom-0 flex items-center justify-center">
                  <p className="text-xl font-bold">
                    <span className="text-primary">{metaAge}</span>/
                    <span className="text-third">{form.age}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StepWrapper>
      </div>
      {/* buttons to view to share results and to view history */}
      <div className="my-10 flex flex-col items-center justify-between gap-5 sm:my-16">
        <FilledButton onClick={nextTab}>View History</FilledButton>
        <OutlinedButton onClick={() => setShareResultsPopup(true)}>
          <span>Share your results</span>
          <span>{share}</span>
        </OutlinedButton>
      </div>

      {/* what your results mean section */}
      <div className="mb-16">
        <StepWrapper no={0}>
          <H2>What Your Results Mean</H2>
          <P2>
            Your Vitality Score indicates your current metabolic health status
            compared to other adults in the US population.
            <br />
            <br />A score of 50 suggests that you are of average health and have
            an average risk for developing metabolic health problems in the
            future. The higher your score, suggests better overall metabolic
            health. The good news is that healthy lifestyle changes and smart
            supplementation can improve your Vitality Score over time.
          </P2>
        </StepWrapper>
      </div>

      {/* section to set your goals */}
      <StepWrapper no={3}>
        <VitalityScore
          score={1}
          form={form}
          title="Your Vitality Score Could Be"
          image={Graph2}
        />

        <InputLabel>Weight</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[4]}
          value={form.newWeight}
          onChange={setInput("newWeight")}
          unit=" lbs."
        />
        <InputLabel>Waist</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[6]}
          value={form.newWaist}
          onChange={setInput("newWaist")}
          unit=" in."
        />
        <InputLabel>Systolic Blood Pressure (mmHg)</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[0]}
          value={form.newPressure}
          onChange={setInput("newPressure")}
          clName="rangeSlider new pressure"
          unit=" mmHG"
        />
        <InputLabel>Diastolic Blood Pressure (mmHg)</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[5]}
          value={form.newDiastolicBP}
          onChange={setInput("newDiastolicBP")}
          clName="rangeSlider new diastolicBP"
          unit=" mmHG"
        />
        <InputLabel className="med h3">HDL (mg/dL)</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[1]}
          value={form.newHdl}
          onChange={setInput("newHdl")}
          unit=" mg/dL"
          clName="rangeSlider new hdl"
        />
        <InputLabel className="med h3">Triglycerides (mg/dL)</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[2]}
          value={form.newTrigl}
          onChange={setInput("newTrigl")}
          unit=" mg/dL"
          clName="rangeSlider new trigl"
        />
        <InputLabel className="med h3">Fasting Glucose (mg/dL)</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[3]}
          value={form.newGlucose}
          onChange={(event) =>
            handleSugarChangeGlucoseToA1C(event, setInputDirect)
          }
          unit=" mg/dL"
          clName="rangeSlider new glucose"
        />
        <InputLabel className="med h3">A1C Glycated Hemoglobin </InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[7]}
          value={form.newA1c}
          onChange={(event) =>
            handleSugarChangeA1CToGlucose(event, setInputDirect)
          }
          unit="%"
          stepAmount="0.1"
          clName="rangeSlider new a1c"
        />
      </StepWrapper>

      {/* buttons to save and share your goals */}
      <div className="my-16 flex flex-col items-center justify-between gap-5">
        <FilledButton onClick={() => saveYourGoals()}>
          Save Your Goals
        </FilledButton>
        <OutlinedButton onClick={() => setShareGoalsPopup(true)}>
          <span>Share Your Goals</span>
          <span>{share}</span>
        </OutlinedButton>
      </div>

      {/* learn more block */}

      <LearnMoreBlock></LearnMoreBlock>

      {/* share results popup */}
      {shareResultsPopup ? (
        <VitalityScoreResultsPopup
          close={() => setShareResultsPopup(false)}
          form={form}
          metaAge={metaAge}
        />
      ) : null}

      {/* shera goals popup */}
      {shareGoalsPopup ? (
        <VitalityScoreGoalsPopup
          form={form}
          close={() => setShareGoalsPopup(false)}
        />
      ) : null}
    </div>
  );
}

// make a function that will take in A1C value and convert it to glucose then update both corresponding form values
function handleSugarChangeA1CToGlucose(evt, setInputDirect) {
  let sugarNumber = 0;
  if (evt.target.value === 0) {
    sugarNumber = parseInt(evt.target.value);
  } else {
    sugarNumber = parseInt(parseFloat(evt.target.value) * 28.7 - 46.7);
  }
  setInputDirect("newA1c", evt.target.value, "newGlucose", sugarNumber);
}

// make a function that will take in glucose integer value and convert it to a1c percent by then update both corresponding form values
function handleSugarChangeGlucoseToA1C(evt, setInputDirect) {
  let sugarNumber = 0;
  if (evt.target.value === 0) {
    sugarNumber = parseInt(evt.target.value);
  } else {
    sugarNumber = parseFloat((parseInt(evt.target.value) + 46.7) / 28.7);
  }
  setInputDirect(
    "newGlucose",
    evt.target.value,
    "newA1c",
    sugarNumber.toFixed(1)
  );
}
