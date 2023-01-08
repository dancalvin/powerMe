import React from "react";
// get the calendar icon
import { calendar } from "../Base/SVG";

export default function Step2({
  form,
  setCheckbox,
  nextTab,
  prevTab,
  setInput,
  type = "1",
}) {
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
      <div
        className={`step second ${
          type == "1" ? "" : "!border-0 before:content-none"
        } `}
      >
        {type == "1" ? (
          <>
            <h2 className="h2">Tell Us About Yourself</h2>
            <h3 className="light h3">
              Your age, sex at birth, and ethnicity contribute to the baseline
              data for the creation of your Vitality Score.
            </h3>
          </>
        ) : null}

        <div className="form">
          <h3 className="med h3">How old are you?</h3>
          <div className="input__calendar">
            <input
              type="number"
              className="input"
              placeholder="40"
              onChange={setInput("age")}
              value={form.age}
            />
          </div>
          <h3 className="med h3">Sex assigned at birth:</h3>
          <div className="input__radio">
            <div className="input__radio-item">
              <input
                type="radio"
                name="radio"
                value="Female"
                onClick={setInput("sex")}
                checked={form.sex == "Female" ? true : false}
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
                checked={form.sex == "Male" ? true : false}
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
                checked={form.sex == "Intersex" ? true : false}
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
                checked={form.sex == "Prefer not to disclose" ? true : false}
              />
              <label htmlFor=""></label>
              <span>Prefer not to disclose</span>
            </div>
          </div>
          <h3 className="med h3">
            Which of the following best describes you? Select all that apply.{" "}
          </h3>
          <div className="input__checkbox">
            <div className="input__checkbox-item">
              <input
                type="checkbox"
                onClick={setCheckbox("asian")}
                checked={form.asian}
              />
              <label htmlFor=""></label>
              <span>Asian</span>
            </div>
            <div className="input__checkbox-item">
              <input
                type="checkbox"
                onClick={setCheckbox("pacIsl")}
                checked={form.pacIsl}
              />
              <label htmlFor=""></label>
              <span>Pacific Islander</span>
            </div>
            <div className="input__checkbox-item">
              <input
                type="checkbox"
                onClick={setCheckbox("whiteOrCaucas")}
                checked={form.whiteOrCaucas}
              />
              <label htmlFor=""></label>
              <span>White or Caucasian</span>
            </div>
            <div className="input__checkbox-item">
              <input
                type="checkbox"
                onClick={setCheckbox("blackAfrAmer")}
                checked={form.blackAfrAmer}
              />
              <label htmlFor=""></label>
              <span>Black of African American</span>
            </div>
            <div className="input__checkbox-item">
              <input
                type="checkbox"
                onClick={setCheckbox("hispLat")}
                checked={form.hispLat}
              />
              <label htmlFor=""></label>
              <span>Hispanic of Latino</span>
            </div>
            <div className="input__checkbox-item">
              <input
                type="checkbox"
                onClick={setCheckbox("natAmerAlas")}
                checked={form.natAmerAlas}
              />
              <label htmlFor=""></label>
              <span>Native American or Native Alaskan</span>
            </div>
            <div className="input__checkbox-item">
              <input
                type="checkbox"
                onClick={setCheckbox("multBirac")}
                checked={form.multBirac}
              />
              <label htmlFor=""></label>
              <span>Multiracial or Biracial</span>
            </div>
            <div className="input__checkbox-item">
              <input
                type="checkbox"
                onClick={setCheckbox("notListed")}
                checked={form.notListed}
              />
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
              value={form.extraRace}
            />
          </div>
        </div>
      </div>

      {type == "1" ? (
        <div className="mt-10 flex flex-col items-center">
          <button
            type="button"
            className="button primary !m-0  max-[540px]:!w-full"
            disabled={!isValid}
            onClick={nextTab}
          >
            Continue
          </button>

          <button
            type="button"
            className="button primary clearDT back !m-0 max-[540px]:!w-full"
            onClick={prevTab}
          >
            Back
          </button>
        </div>
      ) : null}
    </>
  );
}
