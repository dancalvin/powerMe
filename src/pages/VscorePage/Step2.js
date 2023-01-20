import React, { useState } from "react";
import { H2, H3, P, P2 } from "../../components/Typography";
import { FilledButton, OutlinedButton } from "../../components/Buttons";
import {
  InputLabel,
  InputField,
  InputCheckbox,
  InputRadio,
} from "../../components/Inputs";
import { StepWrapper } from "../../layouts/Steps";

export default function Step2({
  form,
  setCheckbox,
  nextTab,
  prevTab,
  setInput,
  type = "1",
  stepNo,
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
    <div>
      <StepWrapper disabled={type == "1" ? false : true} no={stepNo}>
        {type == "1" ? (
          <>
            <H2>Tell Us About Yourself</H2>
            <P2>
              Your age, sex at birth, and ethnicity contribute to the baseline
              data for the creation of your Vitality Score.
            </P2>
          </>
        ) : null}

        {/* form */}

        <div className="mb-10 sm:mb-[52px]">
          <InputLabel>How old are you?</InputLabel>
          <InputField
            type="number"
            className="input"
            placeholder="40"
            onChange={setInput("age")}
            value={form.age}
          ></InputField>

          <InputLabel>Sex assigned at birth:</InputLabel>
          <InputRadio
            label="Female"
            name="radio"
            value="Female"
            onClick={setInput("sex")}
            checked={form.sex == "Female" ? true : false}
          ></InputRadio>

          <InputRadio
            label="Male"
            name="radio"
            value="Male"
            onClick={setInput("sex")}
            checked={form.sex == "Male" ? true : false}
          ></InputRadio>

          <InputRadio
            label="Intersex"
            name="radio"
            value="Intersex"
            onClick={setInput("sex")}
            checked={form.sex == "Intersex" ? true : false}
          ></InputRadio>

          <InputRadio
            label="Prefer not to disclose"
            name="radio"
            value="Prefer not to disclose"
            onClick={setInput("sex")}
            checked={form.sex == "Prefer not to disclose" ? true : false}
          ></InputRadio>
        </div>
        <div>
          <InputLabel>
            Which of the following best describes you? Select all that apply.
          </InputLabel>

          <InputCheckbox
            label="Asian"
            checked={form.asian}
            onClick={setCheckbox("asian")}
          ></InputCheckbox>

          <InputCheckbox
            label="Pacific Islander"
            onClick={setCheckbox("pacIsl")}
            checked={form.pacIsl}
          ></InputCheckbox>

          <InputCheckbox
            label="White or Caucasian"
            onClick={setCheckbox("whiteOrCaucas")}
            checked={form.whiteOrCaucas}
          ></InputCheckbox>

          <InputCheckbox
            label="Black of African American"
            onClick={setCheckbox("blackAfrAmer")}
            checked={form.blackAfrAmer}
          ></InputCheckbox>

          <InputCheckbox
            label="Hispanic of Latino"
            onClick={setCheckbox("hispLat")}
            checked={form.hispLat}
          ></InputCheckbox>

          <InputCheckbox
            label="Native American or Native Alaskan"
            onClick={setCheckbox("natAmerAlas")}
            checked={form.natAmerAlas}
          ></InputCheckbox>

          <InputCheckbox
            label="Multiracial or Biracial"
            onClick={setCheckbox("multBirac")}
            checked={form.multBirac}
          ></InputCheckbox>

          <InputField
            type="text"
            placeholder="Unspecified race/ethnicity"
            onChange={setInput("extraRace")}
            value={form.extraRace}
          ></InputField>
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
