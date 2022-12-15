import React, { useState } from "react";

import CustomSelect from "./CustomSelect";
import RangeSlider from "./RangeSlider/RangeSlider";
import { RangeSliderModul } from "./RangeSlider/RangeSliderModul";

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
export default function Step3({
  nextTab,
  prevTab,
  setInput,
  updateForm,
  form,
  type = "1",
}) {
  const [select, setSelect] = useState();
  const setHeightUnit = (data) => updateForm({ heightUnit: data });
  const isValid =
    form.feet !== "" &&
    form.inches !== "" &&
    form.waist !== "" &&
    form.weight !== "" &&
    form.pressure !== "";
  const changeMedium = (item) => {
    setHeightUnit(item.unit);
    setSelect(item.id);
  };

  return (
    <>
      <div
        className={`step third ${
          type == "1" ? "" : "!border-[0px] pt-0 before:content-none"
        } `}
      >
        {type == "1" ? (
          <>
            {" "}
            <h2>Measurements</h2>
            <h3 className="light">
              Your height and weight determine your BMI or Body Mass Index. BMI
              is a person’s weight in kilograms (or pounds) divided by the
              square of height in meters (or feet). While BMI doesn’t measure
              body fat or lean tissue directly, a high BMI is associated with an
              increased risk for metabolic health problems.
            </h3>
          </>
        ) : null}
        <div className="form">
          <h3 className="med">Height</h3>
          <h3 className="med">Feet</h3>
          <div className="input__measure">
            <input
              type="number"
              className="input"
              placeholder="ex: 5"
              onChange={setInput("feet")}
              value={form.feet}
            />
          </div>
          <h3 className="med">Inches</h3>
          <div className="input__measure">
            <input
              type="number"
              className="input"
              placeholder="ex: 7"
              onChange={setInput("inches")}
              value={form.inches}
            />
          </div>
          <h3 className="med">Weight (lbs)</h3>
          <div className="input__measure">
            <input
              type="number"
              className="input"
              placeholder="ex: 190"
              onChange={setInput("weight")}
              value={form.weight}
            />
          </div>
          <h3 className="med">Waist Circumference (in)</h3>
          <h3 className="light">
            To correctly measure wasit circumference:
            <ul className="myList">
              <li>
                Stand and place a tape measure around your waist, just above
                your hipbones
              </li>
              <li>Make sure tape is horizontal around the waist</li>
              <li>
                Keep the tape snug around the waist, but not compressing the
                skin
              </li>
              <li>Measure your waist just after you breathe out</li>
            </ul>
          </h3>

          <div className="input__measure">
            <input
              type="number"
              className="input"
              placeholder="ex: 30"
              onChange={setInput("waist")}
              value={form.waist}
            />
          </div>
          <h3 className="med">Systolic Blood Pressure (mmHg)</h3>
          <h3 className="light">
            Blood Pressure consists of two numbers, systolic (top number) and
            diastolic (bottom number. Blood pressure greater than 130/80 mm is
            considered high. People with blood pressure over 140/90 should be
            seen by their healthcare provider. If your blood pressure is over
            170 systolic, you should seek medical attention immediately.
          </h3>

          <RangeSlider
            {...RangeSliderModul[0]}
            value={form.pressure}
            onChange={setInput("pressure")}
          />

          <RangeSlider
            {...RangeSliderModul[5]}
            value={form.diastolicBP}
            onChange={setInput("diastolicBP")}
          />
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
