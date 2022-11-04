import React from "react";
// get the calendar icon
import { calendar } from "../Base/SVG";

export default function Step2({ form, setCheckbox, nextTab, setInput }) {
  // the constant is only valid if age and sex are not empty and form race is equal to something
  const isValid =
    form.age !== "" &&
    form.sex !== "" &&
    (form.asian !== false ||
      form.pacIsl !== false ||
      form.whiteOrCaucas !== false ||
      form.blackAfrAmer !== false ||
      form.hispLat !== false ||
      form.natAmerAlas !== false ||
      form.multBirac !== false ||
      form.notListed !== false ||
      form.extraRace !== "");

  return (
    <>
      <div className="step second">
        <h2>Tell Us About Yourself</h2>
        <h3 className="light">
          Your age, sex at birth, and ethnicity establish foundational elements of your health and contribute baseline data in the creation of the Vitality Score.
        </h3>
        <div className="form">
          <h3 className="med">How old are you?</h3>
          <div className="input__calendar">
            <input
              type="number"
              className="input"
              placeholder="40"
              onChange={setInput("age")}
            />
          </div>
          <h3 className="med">Sex assigned at birth:</h3>
          <div className="input__radio">
            <div className="input__radio-item">
              <input
                type="radio"
                name="radio"
                value="Female"
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
                onClick={setInput("sex")}
              />
              <label htmlFor=""></label>
              <span>Prefer not to disclose</span>
            </div>
          </div>
          <h3 className="med">
            Which of the following best describes you? Select all that apply.{" "}
          </h3>
          <div className="input__checkbox">
            <div className="input__checkbox-item">
              <input type="checkbox" onClick={setCheckbox("asian")} />
              <label htmlFor=""></label>
              <span>Asian</span>
            </div>
            <div className="input__checkbox-item">
              <input type="checkbox" onClick={setCheckbox("pacIsl")} />
              <label htmlFor=""></label>
              <span>Pacific Islander</span>
            </div>
            <div className="input__checkbox-item">
              <input type="checkbox" onClick={setCheckbox("whiteOrCaucas")} />
              <label htmlFor=""></label>
              <span>White or Caucasian</span>
            </div>
            <div className="input__checkbox-item">
              <input type="checkbox" onClick={setCheckbox("blackAfrAmer")} />
              <label htmlFor=""></label>
              <span>Black of African American</span>
            </div>
            <div className="input__checkbox-item">
              <input type="checkbox" onClick={setCheckbox("hispLat")} />
              <label htmlFor=""></label>
              <span>Hispanic of Latino</span>
            </div>
            <div className="input__checkbox-item">
              <input type="checkbox" onClick={setCheckbox("natAmerAlas")} />
              <label htmlFor=""></label>
              <span>Native American or Native Alaskan</span>
            </div>
            <div className="input__checkbox-item">
              <input type="checkbox" onClick={setCheckbox("multBirac")} />
              <label htmlFor=""></label>
              <span>Multiracial or Biracial</span>
            </div>
            <div className="input__checkbox-item">
              <input type="checkbox" onClick={setCheckbox("notListed")} />
              <label htmlFor=""></label>
              <span>
                A race/ethnicity not listed here (please specify below)
              </span>
            </div>
            <input
              type="text"
              className="input"
              placeholder="Unspecified race/ethnicity"
              onChange={setInput("extraRace")}
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
