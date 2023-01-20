import React, { useState } from "react";

import { H2, P2 } from "../../components/Typography";
import { FilledButton, OutlinedButton } from "../../components/Buttons";
import {
  InputLabel,
  InputField,
  InputRangeSlider,
} from "../../components/Inputs";
import { StepWrapper } from "../../layouts/Steps";

import { RangeSliderModuleForVitalScore as RangeSliderModule } from "../../utils/DataStore";

export default function Step3({
  nextTab,
  prevTab,
  setInput,
  updateForm,
  form,
  type = "1",
  stepNo,
}) {
  const isValid =
    form.feet !== "" &&
    form.inches !== "" &&
    form.waist !== "" &&
    form.weight !== "" &&
    form.pressure !== "";

  return (
    <div>
      <StepWrapper disabled={type == "1" ? false : true} no={stepNo}>
        {type == "1" ? (
          <>
            <H2>Measurements</H2>
            <P2>
              Your height and weight determine your BMI or Body Mass Index. BMI
              is a person’s weight in kilograms (or pounds) divided by the
              square of height in meters (or feet). While BMI doesn’t measure
              body fat or lean tissue directly, a high BMI is associated with an
              increased risk for metabolic health problems.
            </P2>
          </>
        ) : null}

        {/* form */}

        <div>
          <InputLabel>Height</InputLabel>
          <InputLabel>Feet</InputLabel>
          <InputField
            type="number"
            className="input"
            placeholder="ex: 5"
            onChange={setInput("feet")}
            value={form.feet}
          ></InputField>

          <InputLabel>Inches</InputLabel>
          <InputField
            type="number"
            className="input"
            placeholder="ex: 7"
            onChange={setInput("inches")}
            value={form.inches}
          ></InputField>

          <InputLabel>Weight (lbs)</InputLabel>

          <InputRangeSlider
            {...RangeSliderModule[4]}
            value={form["weight"]}
            onChange={setInput("weight")}
          />

          {/*
            <InputField
            type="number"
            className="input"
            placeholder="ex: 190"
            onChange={setInput("weight")}
            value={form.weight}
          ></InputField>
            */}

          <InputLabel>Waist Circumference (in)</InputLabel>

          <div>
            <P2>
              <div>To correctly measure wasit circumference:</div>
              <div>
                <ul className="ml-8 list-disc">
                  <li>
                    <p>
                      Stand and place a tape measure around your waist, just
                      above your hipbones
                    </p>
                  </li>
                  <li>
                    <p>Make sure tape is horizontal around the waist</p>
                  </li>
                  <li>
                    <p>
                      Keep the tape snug around the waist, but not compressing
                      the skin
                    </p>
                  </li>
                  <li>
                    <p>Measure your waist just after you breathe out</p>
                  </li>
                </ul>
              </div>
            </P2>
          </div>

          <InputField
            type="number"
            className="input"
            placeholder="ex: 30"
            onChange={setInput("waist")}
            value={form.waist}
          ></InputField>

          <InputLabel>Systolic Blood Pressure (mmHg)</InputLabel>

          <P2>
            Blood Pressure consists of two numbers, systolic (top number) and
            diastolic (bottom number. Blood pressure greater than 130/80 mm is
            considered high. People with blood pressure over 140/90 should be
            seen by their healthcare provider. If your blood pressure is over
            170 systolic, you should seek medical attention immediately.
          </P2>

          <InputRangeSlider
            {...RangeSliderModule[0]}
            value={form.pressure}
            onChange={setInput("pressure")}
          />

          <InputRangeSlider
            {...RangeSliderModule[5]}
            value={form.diastolicBP}
            onChange={setInput("diastolicBP")}
          />
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
