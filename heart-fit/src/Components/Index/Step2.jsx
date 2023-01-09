import React, { useState } from "react";
import CustomSelect from "./CustomSelect";

export const weightList = [
  { id: "Pounds", value: "Pounds ", unit: "(lbs)" },
  { id: "Kilograms", value: "Kilograms ", unit: "(kg)" },
  { id: "Gram", value: "Gram ", unit: "(g)" },
];

export default function Step2({
  updateForm,
  form,
  nextTab,
  prevTab,
  setInput,
}) {
  const [select, setSelect] = useState();
  const setWeightUnit = (data) => updateForm({ weightUnit: data });
  // the constant is only valid if age and sex are not empty and form race is equal to something
  const isValid =
    form.age !== "" &&
    form.sex !== "" &&
    form.weight !== "" &&
    form.weightUnit !== "";
  const changeMedium = (item) => {
    setWeightUnit(item.unit);

    setSelect(item.id);
  };
  return (
    <>
      <div className="step second">
        <h2 className="h2">Tell Us About Yourself</h2>
        <h3 className="h3 light">
          Your age, weight, and sex at birth contribute to the baseline data for
          the creation of your Heart-Fit Score.
        </h3>
        <div className="form">
          <h3 className="h3 med">How old are you?</h3>
          <div className="input__calendar">
            <input
              type="number"
              className="input"
              placeholder="40"
              onChange={setInput("age")}
              value={form["age"]}
            />
          </div>
          <h3 className="h3 med">Weight</h3>
          <div className="input__measure">
            <input
              type="number"
              className="input"
              placeholder="180"
              onChange={setInput("weight")}
              value={form["weight"]}
            />
            <CustomSelect
              list={weightList}
              selected={weightList[0]}
              onChange={changeMedium}
            />
          </div>
          <h3 className="h3 med">Sex assigned at birth:</h3>
          <div className="input__radio secStep">
            <div className="input__radio-item">
              <input
                type="radio"
                name="radio"
                value="Female"
                checked={form["sex"] == "Female"}
                onClick={setInput("sex")}
              />
              <label htmlFor=""></label>
              <span>Female</span>
            </div>
            <div className="input__radio-item">
              <input
                type="radio"
                name="radio"
                value="Male"
                checked={form["sex"] == "Male"}
                onClick={setInput("sex")}
              />
              <label htmlFor=""></label>
              <span>Male</span>
            </div>
            <div className="input__radio-item">
              <input
                type="radio"
                name="radio"
                value="Intersex"
                checked={form["sex"] == "Intersex"}
                onClick={setInput("sex")}
              />
              <label htmlFor=""></label>
              <span>Intersex</span>
            </div>
            <div className="input__radio-item">
              <input
                type="radio"
                name="radio"
                value="Prefer not to disclose"
                checked={form["sex"] == "Prefer not to disclose"}
                onClick={setInput("sex")}
              />
              <label htmlFor=""></label>
              <span>Prefer not to disclose</span>
            </div>
          </div>
        </div>
      </div>
      <div className="button__outer">
        <button
          type="button"
          className="button primary !w-full"
          disabled={!isValid}
          onClick={nextTab}
        >
          Continue
        </button>

        <button
          type="button"
          className="button primary clearDT back max-[540px]:!mx-0 max-[540px]:!w-full"
          onClick={prevTab}
        >
          Back
        </button>
      </div>
    </>
  );
}
