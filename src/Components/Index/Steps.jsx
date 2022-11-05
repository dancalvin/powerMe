// This file adds the 5 bubbles and instantiates the initial form array. It progresses through the steps and renders the appropriate form segment based on the step number

// Define which files are to be included in the steps

import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
const steps = ["step1", "step2", "step3", "step4", "step5"];
// const steps = ["step5"];

// Define the data that will be collected in the form
const initForm = {
  age: "",
  sex: "",
  asian: false,
  pacIsl: false,
  whiteOrCaucas: false,
  blackAfrAmer: false,
  hispLat: false,
  natAmerAlas: false,
  multBirac: false,
  notListed: false,
  extraRace: "",
  feet: "",
  inches: "",
  heightUnit: "(in)",
  weight: "",
  weightUnit: "(lbs)",
  pressure: 90,
  hdl: 20,
  trigl: 20,
  glucose: 75,
  newWeight: 30,
  newPressure: 90,
  newHdl: 40,
  newTrigl: 100,
  newGlucose: 80,
};

const classNames = ["first", "second", "third", "fourth", "fifth"];

// Define the default export function for Steps.jsx
export default function Steps() {
  // add the variables form and step using useState. set form var to initForm data from and set step var to the first step in the steps array
  const [form, setForm] = useState(initForm);
  const [step, setStep] = useState(steps[0]);

  // Spread operator used to copy data from one array to another
  const updateForm = (data) => {
    setForm({ ...form, ...data });
  };

  // this function helps to set the corresponding items in the array to their matching input value
  const setInput = (key) => (event) =>
    updateForm({ [key]: event.target.value });

  // this function helps set the checks for the items that are clicked by the user
  const setCheckbox = (key) => (event) =>
    updateForm({ [key]: event.target.checked });

  // use this funtion to get the index of the current step
  const currentIndex = React.useMemo(() => steps.indexOf(step), [step]);

  // Define function for changing step to go back one
  const prevTab = () => {
    if (currentIndex > 0) setStep(steps[currentIndex - 1]);
  };
  // Define function to change step to go forward one
  const nextTab = () => {
    if (currentIndex < steps.length - 1) setStep(steps[currentIndex + 1]);
    window.scrollTo(0, 0);
  };

  const commonProps = {
    prevTab,
    nextTab,
    form,
    updateForm,
    setInput,
    setCheckbox,
  };

  // this function fills in the circles by using css and additonal class names fill and active to bold the text
  // add the following line to lie 94ish righ tafter className to add onlick step setter
  // onClick={() => {setStep(steps[0]);}}
  return (
    <div className="steps">
      <div className="auto__container">
        <div className="steps__inner">
          <h1 className={classNames[currentIndex]}>
            Calculate your Vitality score
          </h1>
          <div className="steps__line">
            <div className="steps__item">
              <div
                className={
                  "steps__item-circle " + (currentIndex === 0 ? "fill" : "")
                }
              >
                1
              </div>
              <div
                className={
                  "steps__item-title " + (currentIndex === 0 ? "active" : "")
                }
              >
                Intro
              </div>
            </div>
            <div className="steps__item">
              <div
                className={
                  "steps__item-circle " + (currentIndex === 1 ? "fill" : "")
                }
              >
                2
              </div>
              <div
                className={
                  "steps__item-title " + (currentIndex === 1 ? "active" : "")
                }
              >
                Tell Us About Yourself
              </div>
            </div>
            <div className="steps__item">
              <div
                className={
                  "steps__item-circle " + (currentIndex === 2 ? "fill" : "")
                }
              >
                3
              </div>
              <div
                className={
                  "steps__item-title " + (currentIndex === 2 ? "active" : "")
                }
              >
                Measurements
              </div>
            </div>
            <div className="steps__item">
              <div
                className={
                  "steps__item-circle " + (currentIndex === 3 ? "fill" : "")
                }
              >
                4
              </div>
              <div
                className={
                  "steps__item-title " + (currentIndex === 3 ? "active" : "")
                }
              >
                Lab Values
              </div>
            </div>
            <div className="steps__item">
              <div
                className={
                  "steps__item-circle " + (currentIndex === 4 ? "fill" : "")
                }
              >
                5
              </div>
              <div
                className={
                  "steps__item-title " + (currentIndex === 4 ? "active" : "")
                }
              >
                Results
              </div>
            </div>
          </div>
          {step === steps[0] && <Step1 {...commonProps} />}
          {step === steps[1] && <Step2 {...commonProps} />}
          {step === steps[2] && <Step3 {...commonProps} />}
          {step === steps[3] && <Step4 {...commonProps} />}
          {step === steps[4] && <Step5 {...commonProps} />}
        </div>
      </div>
    </div>
  );
}
