import React, { useState, useEffect } from "react";
import { isSameDay, differenceInDays } from "date-fns";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import HeartFitHistory from "./HeartFitHistory/index";
import WebApp from "../../containers/WebApp";
import StepsNumbersList from "../../layouts/StepsNumbersList";
import { H1 } from "../../components/Typography";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

import { setItem, getItem, deleteItem, clearls } from "../../localStore";
import { HeartFitInitForm as initForm } from "../../utils/DataStore";
/* steps */
const steps = ["step1", "step2", "step3", "step4", "step5", "step6"];

export default function HeartFitPage(props) {
  // add the variables form and step using useState. set form var to initForm data from and set step var to the first step in the steps array
  const [form, setForm] = useState(initForm);
  const [step, setStep] = useState(steps[0]);
  const [stepNo, setStepNo] = useState(0);

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
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
      setStepNo(currentIndex - 1);
    }
  };
  // Define function to change step to go forward one
  const nextTab = () => {
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
      setStepNo(currentIndex + 1);
    }
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
    if (index < steps.length) {
      setStep(steps[index]);
      setStepNo(index);
    }
    // we have old forms data stored on localstorage
    const oldTests = getItem("heartFitForms");
    if (oldTests) {
      // check the vitality history for the last submitted form
      setForm(oldTests[oldTests.length - 1].form);
      window.scrollTo(0, 0);
    }
  };

  // Define function to change to a specified step
  const goToTab = (index) => {
    if (index < steps.length) {
      setStep(steps[index]);
      setStepNo(index);
    }
    window.scrollTo(0, 0);
  };
  const commonProps = {
    prevTab,
    nextTab,
    jumpTab,
    goToTab,
    form,
    stepNo,
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
    <WebApp>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Heart-Fit Calculator</title>
      </Helmet>
      {step === steps[5] ? (
        <div className="mx-auto max-w-page px-0 sm:px-[40px] xl:px-[60px]">
          <HeartFitHistory {...commonProps} />
        </div>
      ) : (
        <div className="mx-auto max-w-page px-[32px] sm:px-[40px] xl:px-[60px]">
          <div className="text-center">
            <H1 no={stepNo}>
              calculate your heart-fit score <br /> (vo2 max)
            </H1>
          </div>
          <StepsNumbersList currentIndex={stepNo} />
          <div>
            {step === steps[0] && <Step1 {...commonProps}></Step1>}
            {step === steps[1] && <Step2 {...commonProps}></Step2>}
            {step === steps[2] && <Step3 {...commonProps}></Step3>}
            {step === steps[3] && <Step4 {...commonProps}></Step4>}
            {step === steps[4] && <Step5 {...commonProps}></Step5>}
          </div>
        </div>
      )}
    </WebApp>
  );
}
