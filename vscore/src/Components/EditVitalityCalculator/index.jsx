import React, { useState, useEffect } from "react";
import isToday from "date-fns/isToday";
import differenceInDays from "date-fns/differenceInDays";
import Step1 from "../Index/Step1";
import Step2 from "../Index/Step2";
import Step3 from "../Index/Step3";
import Step4 from "../Index/Step4";
import Step5 from "../Index/Step5";
import BasicDatePicker from "../CommonComponents/index";

import { setItem, getItem } from "../../localStore";
import { isSameDay } from "date-fns";
const steps = ["step1", "step2", "step3", "step4", "step5", "step6"];

// Define the data that will be collected in the form
const initForm = {
  age: 50,
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
  pressure: 120,
  hdl: 60,
  trigl: 150,
  glucose: 90,
  a1c: 4.7,
  newWeight: 150,
  newPressure: 120,
  newHdl: 60,
  newTrigl: 150,
  newGlucose: 90,
  waist: "",
  newWaist: 30,
  diastolicBP: 70,
  newDiastolicBP: 70,
  metabolicAge: 0,
  a1cPref: 0,
  newA1cPref: 0,
  newA1c: 4.7,
};

export default function EditVitalityCalculator(props) {
  // add the variables form and step using useState. set form var to initForm data from and set step var to the first step in the steps array
  const [form, setForm] = useState(initForm);
  const [step, setStep] = useState(steps[0]);
  const [timeStamp, setTimeStamp] = useState(null);

  useEffect(() => {
    if (!timeStamp) {
      setTimeStamp(new Date());
    }
  });

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
  // Define function to change step to go forward one
  // Define function to change step to go forward one
  const nextTab = () => {
    let lastTestId,
      lastTest,
      isTestAlreadyExist = false;

    // get saved data forms from localstorage
    const oldTests = getItem("forms");
    if (oldTests) {
      for (let i = 0; i < oldTests.length; i++) {
        if (
          differenceInDays(
            new Date(oldTests[i].timeStamp),
            new Date(timeStamp)
          ) <= 1 &&
          isSameDay(new Date(oldTests[i].timeStamp), new Date(timeStamp))
        ) {
          isTestAlreadyExist = true;
          break;
        }
      }

      lastTest = oldTests[oldTests.length - 1];
      lastTestId = parseInt(lastTest.id);

      if (isTestAlreadyExist) {
        if (
          window.confirm(
            "Do you want to override your previous test on the same data?"
          )
        ) {
          oldTests[oldTests.length - 1]["form"] = form;
          setItem("forms", oldTests);
          props.loadHistoryData();
        }
      } else {
        oldTests.push({
          id: lastTestId + 1,
          timeStamp: new Date(timeStamp),
          form: form,
        });
        setItem("forms", oldTests);
        props.loadHistoryData();
        props.close();
      }
    } else {
      setItem("forms", [{ id: 1, timeStamp: new Date(timeStamp), form: form }]);
      props.loadHistoryData();
      props.close();
    }
  };

  const jumpTab = (index) => {
    if (index < steps.length - 1) setStep(steps[index]);
    // we have old forms data stored on localstorage
    const oldTests = getItem("forms");
    if (oldTests) {
      // check the vitality history for the last submitted form
      setForm(oldTests[oldTests.length - 1].form);
      window.scrollTo(0, 0);
    }
  };

  const commonProps = {
    prevTab,
    nextTab,
    jumpTab,
    form,
    updateForm,
    setInput,
    setInputDirect,
    setCheckbox,
  };

  // this function fills in the circles by using css and additonal class names fill and active to bold the text
  // add the following line to lie 94ish righ tafter className to add onlick step setter
  // onClick={() => {setStep(steps[0]);}}

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
      form.extraRace !== "") &&
    form.hdl !== "" &&
    form.trigl !== "" &&
    form.glucose !== "" &&
    form.feet !== "" &&
    form.inches !== "" &&
    form.waist !== "" &&
    form.weight !== "" &&
    form.pressure !== "";

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 m-7">
      <div
        className="fixed top-0 left-0 bottom-0 right-0 -z-[1] flex items-center justify-center bg-black opacity-[0.65]"
        onClick={props.close}
      ></div>

      <div className="relative mx-auto h-full w-full max-w-[1080px] overflow-auto bg-secondary pb-16">
        <div
          className="absolute top-8 right-8 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px]"
          onClick={props.close}
        >
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8267 12.9723L7.20797 9.35357L3.67244 12.8891L0.989592 10.2063L4.52513 6.67072L0.927201 3.0728L3.46447 0.535534L7.06239 4.13346L10.5979 0.597925L13.2808 3.28077L9.74524 6.8163L13.364 10.435L10.8267 12.9723Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="pl-[70px] pr-[60px] pt-[60px] min-[840px]:pl-[96px]">
          <h2 className="font-montserrat text-3xl capitalize leading-[34px]">
            Add historical data to calculate a vitality score
          </h2>

          <div className="mt-12">
            <BasicDatePicker value={timeStamp} setValue={setTimeStamp} />
          </div>
        </div>

        <div>
          {<Step2 {...commonProps} type="2" />}
          {<Step3 {...commonProps} type="2" />}
          {<Step4 {...commonProps} type="2" />}
        </div>
        <button
          type="button"
          className="button primary mt-0"
          disabled={!isValid}
          onClick={nextTab}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
