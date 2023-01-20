import React, { useState } from "react";
import { H1, H2, H3, P, P2 } from "../../components/Typography";
import { FilledButton, OutlinedButton } from "../../components/Buttons";

import {
  InputLabel,
  InputField,
  InputCheckbox,
  InputRadio,
  InputRangeSlider,
} from "../../components/Inputs";
import { StepWrapper } from "../../layouts/Steps";
import { RangeSliderModuleForVitalScore as RangeSliderModule } from "../../utils/DataStore";

export default function Step4({
  form,
  nextTab,
  prevTab,
  setInput,
  setInputDirect,
  setCheckbox,
  stepNo,
  type = "1",
}) {
  const isValid = form.hdl !== "" && form.trigl !== "" && form.glucose !== "";
  return (
    <div>
      <StepWrapper disabled={type == "1" ? false : true} no={stepNo}>
        {type == "1" ? (
          <>
            <H2>Lab Values</H2>
            <P2>
              Certain lab values help establish your risk for cardiovascular
              disease. If you know your numbers, please enter them below. If
              not, feel free to estimate using the numbers within the normal
              range.
            </P2>
          </>
        ) : null}

        <div>
          <InputLabel>HDL (mg/dL)</InputLabel>
          <P2>
            HDL is high-density lipoprotein, also known as “good” cholesterol.
            It absorbs cholesterol and carries it back to the liver, which then
            flushes it from the body. (NOTE: This is CDC definition). High good
            cholesterol is generally associated with better metabolic health.
          </P2>
          <div>
            <InputRangeSlider
              {...RangeSliderModule[1]}
              value={form.hdl}
              onChange={setInput("hdl")}
            />
          </div>

          <InputLabel>Triglycerides (mg/dL)</InputLabel>
          <P2>
            Triglycerides are a type of fat found in your blood. Your body
            releases triglycerides for energy between meals. (NOTE: This is Mayo
            Clinic Definition). Higher triglycerides are associated with an
            increased risk for metabolic health problems.
          </P2>

          <div>
            <InputRangeSlider
              {...RangeSliderModule[2]}
              value={form.trigl}
              onChange={setInput("trigl")}
            />
          </div>

          <InputLabel>Fasting Blood Sugar</InputLabel>
          <P2>
            This is your blood glucose after a minimum fast of 10 hours. Values
            below 100 are considered normal. If your number is above 120 and you
            don’t have diabetes, you should check with your healthcare provider.
          </P2>

          <div>
            <InputRangeSlider
              {...RangeSliderModule[3]}
              value={form.glucose}
              // update the glucose value and the a1c value
              onChange={(event) =>
                handleSugarChangeGlucoseToA1C(event, setInputDirect)
              }
            />
          </div>

          <InputLabel>A1C Glycated Hemoglobin</InputLabel>
          <P2>
            Glycated hemoglobin is a measure of your average blood sugar over
            the past 2-3 months. A1C is a percentage of hemoglobin that is
            glycated. A normal A1C is less than 5.7%. A1C is a good measure of
            how well your diabetes is controlled. If your A1C is above 6.5%, you
            should check with your healthcare provider.
          </P2>

          <div>
            <InputRangeSlider
              {...RangeSliderModule[7]}
              value={form.a1c}
              unit="%"
              stepAmount="0.1"
              // update the glucose value and the a1c value
              onChange={(event) =>
                handleSugarChangeA1CToGlucose(event, setInputDirect)
              }
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-bold leading-6 sm:font-medium">
              Check this box if you prefer to use A1C in the calculations
              instead of Fasting Blood Sugar.
            </p>
          </div>
        </div>
      </StepWrapper>

      {type == "1" ? (
        <div className="mt-10 flex flex-col items-center justify-center gap-[20px] sm:mt-24">
          <FilledButton onClick={nextTab} disabled={!isValid}>
            Continue
          </FilledButton>
          <OutlinedButton onClick={prevTab}>Back</OutlinedButton>
        </div>
      ) : null}
    </div>
  );
}

//const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// make a function that will take in A1C value and convert it to glucose then update both corresponding form values
function handleSugarChangeA1CToGlucose(evt, setInputDirect) {
  let sugarNumber = 0;
  if (evt.target.value === 0) {
    sugarNumber = parseInt(evt.target.value);
  } else {
    sugarNumber = parseInt(parseFloat(evt.target.value) * 28.7 - 46.7);
  }
  setInputDirect("a1c", evt.target.value, "glucose", sugarNumber);
}

// make a function that will take in glucose integer value and convert it to a1c percent by then update both corresponding form values
function handleSugarChangeGlucoseToA1C(evt, setInputDirect) {
  let sugarNumber = 0;
  if (evt.target.value === 0) {
    sugarNumber = parseInt(evt.target.value);
  } else {
    sugarNumber = parseFloat((parseInt(evt.target.value) + 46.7) / 28.7);
  }
  setInputDirect("glucose", evt.target.value, "a1c", sugarNumber.toFixed(1));
}
