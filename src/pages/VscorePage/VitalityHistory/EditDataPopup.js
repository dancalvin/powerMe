import React, { useState, useEffect } from "react";
import differenceInDays from "date-fns/differenceInDays";
import { isSameDay } from "date-fns";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";
import BasicDatePicker from "../../../components/Inputs";

import { FilledButton, OutlinedButton } from "../../../components/Buttons";
import { H2 } from "../../../components/Typography";
import { setItem, getItem } from "../../../localStore";
import { VitalityScoreInitForm as initForm } from "../../../utils/DataStore";

import { closeIcon } from "../../../components/Svgs";
const steps = ["step1", "step2", "step3", "step4", "step5", "step6"];

export default function EditDataPopup(props) {
  // add the variables form and step using useState. set form var to initForm data from and set step var to the first step in the steps array
  const [form, setForm] = useState(initForm);
  const [step, setStep] = useState(steps[0]);
  const [timeStamp, setTimeStamp] = useState(null);

  useEffect(() => {
    if (props.vsHistory) {
      setTimeStamp(props.vsHistory.timeStamp);
      setForm(props.vsHistory.form);
    } else {
      setTimeStamp(new Date());
    }
  }, []);

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
      isTestAlreadyExist = false,
      alreadyExistTestIndex;

    const oldTests = getItem("forms");
    if (oldTests) {
      // check if the test already exists on that day or not (using the date compare of all the tests)
      for (let i = 0; i < oldTests.length; i++) {
        if (
          differenceInDays(
            new Date(oldTests[i].timeStamp),
            new Date(timeStamp)
          ) <= 1 &&
          isSameDay(new Date(oldTests[i].timeStamp), new Date(timeStamp))
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
            "Do you want to override your previous test on the same data?"
          )
        ) {
          oldTests[alreadyExistTestIndex]["form"] = form;
          setItem("forms", oldTests);
          props.loadHistoryData();
          props.close();
        }
      } else {
        // saving a new test
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
      // it is the first test being saved
      setItem("forms", [{ id: 1, timeStamp: new Date(timeStamp), form: form }]);
      props.loadHistoryData();
      props.close();
    }
  };

  // it will update the form data
  const updateData = () => {
    let alreadyExistTestIndex;

    const oldTests = getItem("forms");
    if (oldTests) {
      for (let i = 0; i < oldTests.length; i++) {
        if (oldTests[i].id == props.vsHistory.id) {
          alreadyExistTestIndex = i;
          break;
        }
      }

      oldTests[alreadyExistTestIndex]["form"] = form;
      setItem("forms", oldTests);
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

  return form ? (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 m-7 max-[540px]:m-0">
      <div
        className="fixed top-0 left-0 bottom-0 right-0 -z-[1] flex items-center justify-center bg-black opacity-[0.65]"
        onClick={props.close}
      ></div>

      <div className="relative mx-auto h-full w-full max-w-[1080px] overflow-auto bg-secondary px-[96px] pb-16 pt-[100px] max-[840px]:px-[70px] max-[540px]:px-8">
        {/* close icon */}
        <div
          className="absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px]"
          onClick={props.close}
        >
          {closeIcon}
        </div>
        {/* timepicker icon */}
        <div>
          <H2>Add historical data to calculate a vitality score</H2>
          <div className="my-12">
            <BasicDatePicker value={timeStamp} setValue={setTimeStamp} />
          </div>
        </div>

        {/* steps icon */}
        <div>
          {<Step2 {...commonProps} type="2" />}
          {<Step3 {...commonProps} type="2" />}
          {<Step4 {...commonProps} type="2" />}
        </div>

        {/* update controllers */}
        <div className="mt-10 flex items-center justify-end gap-4  max-[840px]:px-[70px] max-[700px]:px-[40px] max-[540px]:px-0">
          <div className="flex w-full max-w-[650px] items-center justify-end gap-4 max-[840px]:flex-col-reverse max-[840px]:justify-center">
            <OutlinedButton onClick={props.close}>Cancel</OutlinedButton>

            {props.vsHistory ? (
              <FilledButton disabled={!isValid} onClick={updateData}>
                Update
              </FilledButton>
            ) : (
              <FilledButton disabled={!isValid} onClick={nextTab}>
                Save
              </FilledButton>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
