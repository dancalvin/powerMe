import React, { useState, useEffect } from "react";
import isToday from "date-fns/isToday";
import differenceInDays from "date-fns/differenceInDays";
import { isSameDay } from "date-fns";

import { FilledButton, OutlinedButton } from "../../../components/Buttons";
import {
  InputLabel,
  InputField,
  InputCheckbox,
  InputRadio,
} from "../../../components/Inputs";
import { H1, H2 } from "../../../components/Typography";
import CustomSelectTime from "../../../components/Inputs/CustomSelectTime";
import CustomSelect from "../../../components/Inputs/CustomSelect";
import { RangeSliderModuleForHeartFit as RangeSliderModule } from "../../../utils/DataStore";
import { InputRangeSlider } from "../../../components/Inputs";
import BasicDatePicker from "../../../components/Inputs";
import { setItem, getItem, deleteItem, clearls } from "../../../localStore";
import {
  weightList,
  minuteList,
  HeartFitInitForm as initForm,
} from "../../../utils/DataStore";

import { closeIcon } from "../../../components/Svgs";

function EditDataPopup(props) {
  const [select, setSelect] = useState();
  const [timeStamp, setTimeStamp] = useState(null);
  const [form, setForm] = useState(initForm);
  const setWeightUnit = (data) => updateForm({ weightUnit: data });
  const setHourVal = (data) => updateForm({ timeHour: data });
  const setMinuteVal = (data) => updateForm({ timeMinute: data });
  const setSecondVal = (data) => updateForm({ timeSecond: data });
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [selectedMinutes, setSelectedMinutes] = useState(null);
  const [selectedSeconds, setSelectedSeconds] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  useEffect(() => {
    if (props.hfHistory) {
      setTimeStamp(props.hfHistory.timeStamp);
      setForm(props.hfHistory.form);
      setSelectedMinutes({ value: props.hfHistory.form.timeMinute });
      setSelectedSeconds({ value: props.hfHistory.form.timeSecond });

      let foundUnit = weightList.find(
        (unit) => props.hfHistory.form.weightUnit == unit.unit
      );
      if (foundUnit) {
        setSelectedUnit(foundUnit);
      }
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

  const saveForm = () => {
    let lastTestId,
      lastTest,
      isTestAlreadyExist = false,
      alreadyExistTestIndex;

    const oldTests = getItem("heartFitForms");
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
          setItem("heartFitForms", oldTests);
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
        setItem("heartFitForms", oldTests);
        props.loadHistoryData();
        props.close();
      }
    } else {
      // it is the first test being saved
      setItem("heartFitForms", [
        { id: 1, timeStamp: new Date(timeStamp), form: form },
      ]);
      props.loadHistoryData();
      props.close();
    }
  };

  // it will update the form data
  const updateData = () => {
    let alreadyExistTestIndex;

    const oldTests = getItem("heartFitForms");
    if (oldTests) {
      for (let i = 0; i < oldTests.length; i++) {
        if (oldTests[i].id == props.hfHistory.id) {
          alreadyExistTestIndex = i;
          break;
        }
      }

      oldTests[alreadyExistTestIndex]["form"] = form;
      setItem("heartFitForms", oldTests);
      props.loadHistoryData();
      props.close();
    }
  };

  const isValid =
    form.age !== "" &&
    form.sex !== "" &&
    form.weight !== "" &&
    form.weightUnit !== "" &&
    form.timeMinute !== "00" &&
    form.heartRate !== "";
  const changeMedium = (item) => {
    setWeightUnit(item.unit);
    setSelect(item.id);
  };

  const changeMediumMin = (item) => {
    setMinuteVal(item.value);
    setMinute(item.value);
  };
  const changeMediumSec = (item) => {
    setSecondVal(item.value);
    setSecond(item.value);
  };

  return (
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

        <div className="">
          {/* timepicker icon */}
          <div>
            <H2>Add historical data to calculate Heart-Fit Score (VO2 max)</H2>
            <div className="my-12">
              <BasicDatePicker value={timeStamp} setValue={setTimeStamp} />
            </div>
          </div>

          {/* forms */}

          <div>
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
              <div className="mb-[52px]">
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

              <InputLabel>Mile Time</InputLabel>

              <InputLabel>Minutes</InputLabel>
              <InputRangeSlider
                {...RangeSliderModule[2]}
                value={form.timeMinute}
                onChange={setInput("timeMinute")}
              />

              <InputLabel>Seconds</InputLabel>
              <InputRangeSlider
                {...RangeSliderModule[3]}
                value={form["timeSecond"]}
                onChange={setInput("timeSecond")}
              />

              {/*

               <div className="relative mb-10 flex flex-row flex-nowrap">
                <CustomSelectTime
                  list={[].concat(minuteList).splice(1, 22)}
                  selected={[].concat(minuteList).splice(1, 22)[0]}
                  //selected={form["timeMinute"]}
                  onChange={changeMediumMin}
                  timeUnit="Minutes (min)"
                  timeUnitSm="mins."
                />
                <CustomSelectTime
                  list={minuteList}
                  selected={minuteList[0]}
                  onChange={changeMediumSec}
                  timeUnit="Seconds (s)"
                  timeUnitSm="sec."
                />
              </div>
              
              */}

              <InputLabel>Heart Rate @ Finish</InputLabel>

              <InputRangeSlider
                {...RangeSliderModule[0]}
                value={form.heartRate}
                onChange={setInput("heartRate")}
              />
            </div>
          </div>

          {/* update controllers */}
          <div className="mt-10 flex items-center justify-end gap-4 max-[840px]:px-[70px]  max-[700px]:px-[40px] max-[540px]:px-0 sm:mt-[100px]">
            <div className="flex w-full max-w-[650px] items-center justify-end gap-4 max-[840px]:flex-col-reverse max-[840px]:justify-center">
              <OutlinedButton onClick={props.close}>Cancel</OutlinedButton>

              {props.hfHistory ? (
                <FilledButton disabled={!isValid} onClick={updateData}>
                  Update
                </FilledButton>
              ) : (
                <FilledButton disabled={!isValid} onClick={saveForm}>
                  Save
                </FilledButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDataPopup;
