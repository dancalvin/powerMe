import React, { useState } from "react";

import CustomSelect from "./CustomSelect";

const heightList = [
  { id: "Inches", value: "Inches ", unit: "(in)" },
  { id: "Centimeter", value: "Centimeter ", unit: "(cm)" },
  { id: "Meter", value: "Meter ", unit: "(m)" },
];

const weightList = [
  { id: "Pounds", value: "Pounds ", unit: "(lbs)" },
  { id: "Kilograms", value: "Kilograms ", unit: "(kg)" },
];

// the main export of this jsx file
export default function Step3({ nextTab, setInput, updateForm, form }) {
  const [select, setSelect] = useState();
  const setHeightUnit = (data) => updateForm({ heightUnit: data });

  const isValid =
    form.feet !== "" &&
    form.inches !== "" &&
    form.weight !== "" &&
    form.pressure !== "";
  const changeMedium = (item) => {
    setHeightUnit(item.unit);
    setSelect(item.id);
  };

  return (
    <>
      <div className="step third">
        <h2>Measurements</h2>
        <h3 className="light">
        Your height and weight determine your BMI or Body Mass Index. BMI is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.
        </h3>
        <div className="form">
          <h3 className="med">Height</h3>
          <h3 className="med">Feet</h3>
          <div className="input__measure">
            <input
              type="number"
              className="input"
              placeholder="ex: 5"
              onChange={setInput("feet")}
            />

          </div>
          <h3 className="med">Inches</h3>
          <div className="input__measure">
            <input
              type="number"
              className="input"
              placeholder="ex: 7"
              onChange={setInput("inches")}
            />
          </div>
          <h3 className="med">Weight (lbs)</h3>
          <div className="input__measure">
            <input
              type="number"
              className="input"
              placeholder="ex: 190"
              onChange={setInput("weight")}
            />
          </div>
          <h3 className="med">Systolic Blood Pressure (mmHg)</h3>
          <h3 className="light">
          Blood Pressure is dependent on age and other risk factors. The CDC states that normal blood pressure level is less than 120/80 mm systolic/diastolic.  In general, blood pressure over 140/90 indicates a visit to a primary care physician is recommended. With blood pressure over 170 systolic you should seek medical attention immediately.
          </h3>
          <input
            type="number"
            className="input"
            placeholder="ex: 120"
            onChange={setInput("pressure")}
          />
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
