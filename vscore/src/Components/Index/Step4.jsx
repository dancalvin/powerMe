import React from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import { RangeSliderModul } from "./RangeSlider/RangeSliderModul";

export default function Step4({
  form,
  nextTab,
  prevTab,
  setInput,
  setInputDirect,
  setCheckbox,
  type = "1",
}) {
  const isValid = form.hdl !== "" && form.trigl !== "" && form.glucose !== "";

  return (
    <>
      <div
        style={{ border: type == "1" ? "" : 0 }}
        className={`step fourth ${
          type == "1" ? "" : "mt-10 !border-0 before:content-none"
        } `}
      >
        {type == "1" ? (
          <>
            {" "}
            <h2>Lab Values</h2>
            <h3 className="light">
              Certain lab values help establish your risk for cardiovascular
              disease. If you know your numbers, please enter them below. If
              not, feel free to estimate using the numbers within the normal
              range.
            </h3>
          </>
        ) : null}

        <div className="form">
          <div className="form__list">
            <h3 className="light">
              <span> HDL (mg/dL) </span>
              HDL is high-density lipoprotein, also known as “good” cholesterol.
              It absorbs cholesterol and carries it back to the liver, which
              then flushes it from the body. (NOTE: This is CDC definition).
              High good cholesterol is generally associated with better
              metabolic health.
            </h3>
          </div>
          <div className="form__range">
            <RangeSlider
              {...RangeSliderModul[1]}
              value={form.hdl}
              onChange={setInput("hdl")}
            />
          </div>
          <div className="form__list">
            <h3 className="light">
              <span>Triglycerides (mg/dL)</span>
              Triglycerides are a type of fat found in your blood. Your body
              releases triglycerides for energy between meals. (NOTE: This is
              Mayo Clinic Definition). Higher triglycerides are associated with
              an increased risk for metabolic health problems.
            </h3>
          </div>
          <div className="form__range">
            <RangeSlider
              {...RangeSliderModul[2]}
              value={form.trigl}
              onChange={setInput("trigl")}
            />
          </div>
          <div className="form__list">
            <h3 className="light">
              <span>Fasting Blood Sugar</span>
              This is your blood glucose after a minimum fast of 10 hours.
              Values below 100 are considered normal. If your number is above
              120 and you don’t have diabetes, you should check with your
              healthcare provider.
            </h3>
          </div>
          <div className="form__range">
            <RangeSlider
              {...RangeSliderModul[3]}
              value={form.glucose}
              // update the glucose value and the a1c value
              onChange={(event) =>
                handleSugarChangeGlucoseToA1C(event, setInputDirect)
              }
            />
          </div>

          <div className="form__list">
            <h3 className="light">
              <span>A1C Glycated Hemoglobin</span>
              Glycated hemoglobin is a measure of your average blood sugar over
              the past 2-3 months. A1C is a percentage of hemoglobin that is
              glycated. A normal A1C is less than 5.7%. A1C is a good measure of
              how well your diabetes is controlled. If your A1C is above 6.5%,
              you should check with your healthcare provider.
            </h3>
          </div>
          <div className="form__range">
            <RangeSlider
              {...RangeSliderModul[7]}
              value={form.a1c}
              unit="%"
              stepAmount="0.1"
              // update the glucose value and the a1c value
              onChange={(event) =>
                handleSugarChangeA1CToGlucose(event, setInputDirect)
              }
            />
          </div>
          <h3 className="med">
            Check this box if you prefer to use A1C in the calculations instead
            of Fasting Blood Sugar.{" "}
          </h3>
        </div>
      </div>

      {type == "1" ? (
        <>
          <button
            type="button"
            className="button primary"
            disabled={!isValid}
            onClick={nextTab}
          >
            Continue
          </button>
          <button
            type="button"
            className="button primary clearDT back"
            onClick={prevTab}
          >
            Back
          </button>
        </>
      ) : null}
    </>
  );
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

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
