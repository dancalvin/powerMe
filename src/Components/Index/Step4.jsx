import React from "react";

export default function Step4({ form, nextTab, setInput }) {
  const isValid = form.hdl !== "" && form.trigl !== "" && form.glucose !== "";

  return (
    <>
      <div className="step fourth">
        <h2>Lab Values</h2>
        <h3 className="light">
          Certain lab values help establish your risk for cardiovascular disease.  If you know your numbers, please enter them below.  If not, feel free to estimate using the numbers within the normal range. 
        </h3>
        <div className="form">
          <div className="form__list">
            <h3 className="light">
              <span> HDL (mg/dL) </span>
              HDL is high-density lipoprotein, also known as “good” cholesterol. It absorbs cholesterol and carries it back to the liver, which then flushes it from the body. (NOTE: This is CDC definition). High good cholesterol is generally associated with better metabolic health.
              <span>Normal range for male: {'>'} 40</span>
              <span>Normal range for female: {'>'} 50</span>
            </h3>
          </div>
          <div className="input__pressure">
            <input
              type="number"
              className="input"
              placeholder="ex: 50"
              onChange={setInput("hdl")}
            />
          </div>
          <div className="form__list">
            <h3 className="light">
              <span>Triglycerides (mg/dL)</span>
              Triglycerides are a type of fat found in your blood. Your body releases triglycerides for energy between meals. (NOTE: This is Mayo Clinic Definition). Higher triglycerides are associated with an increased risk for metabolic health problems.
              <span>Normal range: {'<'} 150</span>
            </h3>
          </div>
          <div className="input__pressure">
            <input
              type="number"
              className="input"
              placeholder="ex: 120"
              onChange={setInput("trigl")}
            />
          </div>
          <div className="form__list">
            <h3 className="light">
              <span>Fasting Blook Sugar</span>
              This is your blood glucose after a minimum fast of 10 hours. Values below 100 are considered normal. If your number is above 120 and you don’t have diabetes, you should check with your healthcare provider.
              <span>Normal range: {'<'} 100</span>
            </h3>
          </div>
          <div className="input__pressure">
            <input
              type="number"
              className="input"
              placeholder="ex: 75"
              onChange={setInput("glucose")}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button primary"
        disabled={!isValid}
        onClick={nextTab}
      >
        Continue
      </button>
    </>
  );
}
