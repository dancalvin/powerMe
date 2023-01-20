import React, { useState } from "react";
import { H2, H3, P, P2 } from "../../components/Typography";
import { FilledButton, OutlinedButton } from "../../components/Buttons";
import { StepWrapper } from "../../layouts/Steps";
import CustomSelect from "../../components/Inputs/CustomSelect";
import {
  InputLabel,
  InputField,
  InputCheckbox,
  InputRadio,
  InputRangeSlider,
} from "../../components/Inputs";

import { RangeSliderModuleForHeartFit as RangeSliderModule } from "../../utils/DataStore";
export default function Step2({
  updateForm,
  form,
  nextTab,
  prevTab,
  setInput,
  stepNo,
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
    <div>
      <StepWrapper no={stepNo}>
        <H2>Tell Us About Yourself</H2>
        <P2>
          Your age, weight, and sex at birth contribute to the baseline data for
          the creation of your Heart-Fit Score.
        </P2>

        {/* form */}

        <div className="mb-[52px]">
          <InputLabel>How old are you?</InputLabel>
          <InputField
            type="number"
            placeholder="40"
            onChange={setInput("age")}
            value={form.age}
          ></InputField>

          <InputLabel>Weight</InputLabel>
          <InputRangeSlider
            {...RangeSliderModule[1]}
            value={form["weight"]}
            onChange={setInput("weight")}
          />

          {/** 
             * 
          <div className="relative mb-[46px]">
             <InputField
              type="number"
              placeholder="180"
              onChange={setInput("weight")}
              value={form["weight"]}
            ></InputField>

            <CustomSelect
              list={weightList}
              selected={weightList[0]}
              onChange={changeMedium}
            />
             
          </div>
            */}

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
      </StepWrapper>

      <div className="mt-10 flex flex-col items-center justify-center gap-[20px] sm:mt-24">
        <FilledButton onClick={nextTab} disabled={!isValid}>
          Continue
        </FilledButton>
        <OutlinedButton onClick={prevTab}>Back</OutlinedButton>
      </div>
    </div>
  );
}
