// This file adds the 5 bubbles and instantiates the initial form array. It progresses through the steps and renders the appropriate form segment based on the step number

// Define which files are to be included in the steps

import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
const steps = ["step1", "step2", "step3", "step4", "step5"];


// Define the data that will be collected in the form
const initForm = {
  helpful: "",
  relevant_pos: false,
  understands_needs_pos: false,
  specific_goal_pos: false,
  motivated_pos: false,
  actionable_next_step_pos: false,
  other_description_bool_pos: false,
  other_description_pos_text: "",
  relevant_neg: false,
  understands_needs_neg: false,
  another_aspect: false,
  motivated_neg: false,
  actionable_next_step_neg: false,
  other_description_bool_neg: false,
  other_description_neg_text: "",
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

  // Define function to set step
  const setTab = (theIndex) => {
    setStep(steps[theIndex]);
    window.scrollTo(0, 0);
  };

  const commonProps = {
    prevTab,
    nextTab,
    form,
    updateForm,
    setInput,
    setCheckbox,
    setTab,
  };

  // Define the return statement for the Steps.jsx file
  return (
    <div className="steps">
      <div className="auto__container">
        <div className="steps__inner">
          <h1 className={classNames[currentIndex]}>
            PMH Visit Survey
          </h1>
          {step === steps[0] && <Step2 {...commonProps} />}
          {step === steps[1] && <Step3 {...commonProps} />}
          {step === steps[2] && <Step4 {...commonProps} />}
          {step === steps[3] && <Step1 {...commonProps} />}
        </div>
      </div>
    </div>
  );
}
