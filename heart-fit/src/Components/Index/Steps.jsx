// This file adds the 5 bubbles and instantiates the initial form array. It progresses through the steps and renders the appropriate form segment based on the step number

// Define which files are to be included in the steps

import React, { useState } from "react";
import isToday from "date-fns/isToday";
import { isSameDay } from "date-fns";
import differenceInDays from "date-fns/differenceInDays";
import { toast } from "react-toastify";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import HeartFitHistory from "../HeartFitHistory/index";
import { setItem, getItem, deleteItem, clearls } from "../../localStore";
const steps = ["step1", "step2", "step3", "step4", "step5", "step6"];
// Define the data that will be collected in the form
const initForm = {
  age: null,
  sex: "",
  weight: "",
  weightUnit: "(lbs)",
  timeHour: "00",
  timeMinute: "00",
  timeSecond: "00",
  heartRate: 140,
  heartRateTimeHour: "00",
  heartRateTimeMinute: "01",
  heartRateTimeSecond: "00",
  newHeartRate: 140,
  newHeartRateTimeHour: "00",
  newHeartRateTimeMinute: "01",
  newHeartRateTimeSecond: "00",
  newWeight: 140,
  newTime: 20,
  diastolicBP: 70,
  newDiastolicBP: 70,
  metabolicAge: 0,
  a1cPref: 0,
  newA1cPref: 0,
  newA1c: 4.7,
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

  // this function helps to set the corresponding items in the array to their matching input value
  const setInputDirect = (keyOne, directValueOne, keyTwo, directValueTwo) => {
    updateForm({ [keyOne]: directValueOne, [keyTwo]: directValueTwo });
  };

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

    let lastTestId,
      lastTest,
      isTestAlreadyExist = false,
      alreadyExistTestIndex;

    // steps iteration
    if (currentIndex == 2) {
      // get saved data forms from localstorage
      const oldTests = getItem("heartFitForms");
      if (oldTests) {
        // check if the test already exists on that day or not (using the date compare of all the tests)
        for (let i = 0; i < oldTests.length; i++) {
          if (
            differenceInDays(new Date(oldTests[i].timeStamp), new Date()) <=
              1 &&
            isSameDay(new Date(oldTests[i].timeStamp), new Date())
          ) {
            isTestAlreadyExist = true;
            alreadyExistTestIndex = i;
            break;
          }
        }

        lastTest = oldTests[oldTests.length - 1];
        lastTestId = parseInt(lastTest.id);

        // if the data already exists on thay day, we will ask to override or ignore
        if (isTestAlreadyExist) {
          if (
            window.confirm(
              "Do you want to override your previous test on the same date?"
            )
          ) {
            oldTests[alreadyExistTestIndex]["form"] = form;
            setItem("heartFitForms", oldTests);
            toast("The data has been saved.");
          }
        } else {
          // saving a new test
          oldTests.push({
            id: lastTestId + 1,
            timeStamp: new Date(),
            form: form,
          });
          setItem("heartFitForms", oldTests);
          toast("The data has been saved.");
        }
      } else {
        // it is the first test being saved
        setItem("heartFitForms", [
          { id: 1, timeStamp: new Date(), form: form },
        ]);
        toast("The data has been saved.");
      }
    }
  };

  const saveYourGoals = () => {
    // get saved data forms from localstorage
    if (form) {
      let oldTests;
      oldTests = getItem("heartFitForms");
      oldTests[oldTests.length - 1]["form"] = form;
      if (oldTests) {
        setItem("heartFitForms", oldTests);
        toast("Your goals have been saved.");
        //alert("Your goals have been saved.");
      } else {
        setItem("heartFitForms", [
          { id: 1, timeStamp: new Date(), form: form },
        ]);
      }
    }
  };

  const jumpTab = (index) => {
    if (index < steps.length - 1) setStep(steps[index]);
    // we have old forms data stored on localstorage
    const oldTests = getItem("heartFitForms");
    if (oldTests) {
      // check the vitality history for the last submitted form
      setForm(oldTests[oldTests.length - 1].form);
      window.scrollTo(0, 0);
    }
  };

  // Define function to change to a specified step
  const goToTab = (step) => {
    setStep(steps[step]);
    window.scrollTo(0, 0);
  };
  const commonProps = {
    prevTab,
    nextTab,
    jumpTab,
    goToTab,
    form,
    updateForm,
    setInput,
    setInputDirect,
    setCheckbox,
    saveYourGoals,
  };

  // this function fills in the circles by using css and additonal class names fill and active to bold the text
  // add the following line to lie 94ish righ tafter className to add onlick step setter
  // onClick={() => {setStep(steps[0]);}}
  return (
    <div className="steps">
      <div className="auto__container">
        <div className="steps__inner">
          {step !== steps[5] ? (
            <>
              <h1 className={"h1 " + classNames[currentIndex]}>
                {step === steps[4] ? (
                  <>
                    Heart-Fit score <br /> Results
                  </>
                ) : (
                  <>
                    Calculate your heart-fit score <br /> (Vo2 Max)
                  </>
                )}
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
                      "steps__item-title " +
                      (currentIndex === 0 ? "active" : "")
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
                      "steps__item-title " +
                      (currentIndex === 1 ? "active" : "")
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
                      "steps__item-title " +
                      (currentIndex === 2 ? "active" : "")
                    }
                  >
                    Test Yourself
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
                      "steps__item-title " +
                      (currentIndex === 3 ? "active" : "")
                    }
                  >
                    Results
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
                      "steps__item-title " +
                      (currentIndex === 4 ? "active" : "")
                    }
                  >
                    Goal
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {step === steps[0] && <Step1 {...commonProps} />}
          {step === steps[1] && <Step2 {...commonProps} />}
          {step === steps[2] && <Step3 {...commonProps} />}
          {step === steps[3] && <Step4 {...commonProps} />}
          {step === steps[4] && <Step5 {...commonProps} />}
          {step === steps[5] && <HeartFitHistory {...commonProps} />}
        </div>
      </div>
    </div>
  );
}
