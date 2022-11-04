import React from "react";

export default function Step4({ form, nextTab, setInput }) {
  const isValid = form.hdl !== "" && form.trigl !== "" && form.glucose !== "";

  return (
    <>
      <div className="step fourth">
        <h2>Lab Values</h2>
        <h3 className="light">
        The values related to blood cholesterol are indicative of your risk for cardiovascular disease.  Your overall risk for high cholesterol depends on many factors.  If you know your numbers, please enter them below.  If not, feel free to estimate using the numbers within the normal range or <a href="#">click here</a> to learn about the PowerME Diagnostics Metabolic Health Report.
        </h3>
        <div className="form">
          <div className="form__list">
            <h3 className="light">
              <span> HDL (mg/dL) </span>
              HDL is high-density lipoprotein, also known as “good” cholesterol.
              It absorbs cholesterol and carries it back to the liver which then
              flushes it from the body. (Reference CDC)
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
              Triglycerides are a type of fat in your blood that your body uses
              for energy. (Reference CDC)
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
              <span>Fasting Glucose (mg/dL)</span>
              This measures your blood sugar after an overnight fast (not
              eating). (Reference CDC)
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
