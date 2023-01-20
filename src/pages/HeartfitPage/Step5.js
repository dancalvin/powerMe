import React, { useState, useEffect } from "react";

import { FilledButton, OutlinedButton } from "../../components/Buttons";
import CustomSelect from "../../components/Inputs/CustomSelect";
import CustomSelectTime from "../../components/Inputs/CustomSelectTime";
import {
  InputLabel,
  InputField,
  InputCheckbox,
  InputRadio,
  InputRangeSlider,
} from "../../components/Inputs";
import { StepWrapper } from "../../layouts/Steps";

import { HeartFitResultsPopup } from "./HeartFitResultsPopup";
import HeartFitScore from "./HeartFitScore";
import LearnMoreBlock from "../../layouts/LearnMoreBlock";

import {
  weightList,
  minuteList,
  RangeSliderModuleForHeartFit as RangeSliderModule,
} from "../../utils/DataStore";

import { share } from "../../components/Svgs";

export default function Step5({
  prevTab,
  nextTab,
  goToTab,
  setInput,
  updateForm,
  form,
  stepNo,
  saveYourGoals,
}) {
  const [shareGoalsPopup, setShareGoalsPopup] = useState(false);
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  const [selectedMinutes, setSelectedMinutes] = useState(null);
  const [selectedSeconds, setSelectedSeconds] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const setWeightUnit = (data) => updateForm({ newWeightUnit: data });

  useEffect(() => {
    setSelectedMinutes({ value: form.newTimeMinute });
    setSelectedSeconds({ value: form.newTimeSecond });

    let foundUnit = weightList.find((unit) => form.newWeightUnit == unit.unit);
    if (foundUnit) {
      setSelectedUnit(foundUnit);
    }
  }, []);

  const setMinuteVal = (data) => updateForm({ newTimeMinute: data });
  const setSecondVal = (data) => updateForm({ newTimeSecond: data });

  const changeMediumMin = (item) => {
    setMinuteVal(item.value);
    setMinute(item.value);
  };
  const changeMediumSec = (item) => {
    setSecondVal(item.value);
    setSecond(item.value);
  };

  const changeMedium = (item) => {
    setWeightUnit(item.unit);
  };

  const isValid =
    form.newTimeMinute !== "00" &&
    form.heartRate !== "" &&
    form.age !== "" &&
    form.sex !== "" &&
    form.weight !== "" &&
    form.weightUnit !== "";

  return (
    <div>
      <StepWrapper no={stepNo}>
        <HeartFitScore form={form} tab="goals" />
        <InputLabel>Mile Time</InputLabel>

        <InputLabel>Minutes</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[2]}
          value={form.newTimeMinute}
          onChange={setInput("newTimeMinute")}
        />

        <InputLabel>Seconds</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[3]}
          value={form["newTimeSecond"]}
          onChange={setInput("newTimeSecond")}
        />

        {/**
        <div className="relative mb-10 flex flex-row flex-nowrap">
          <CustomSelectTime
            list={[].concat(minuteList).splice(1, 22)}
            selected={
              selectedMinutes
                ? selectedMinutes
                : [].concat(minuteList).splice(1, 22)[0]
            }
            onChange={changeMediumMin}
            timeUnit="Minutes (min)"
            timeUnitSm="mins."
          />
          <CustomSelectTime
            list={minuteList}
            selected={selectedSeconds ? selectedSeconds : minuteList[0]}
            onChange={changeMediumSec}
            timeUnit="Seconds (s)"
            timeUnitSm="sec."
          />
        </div>
        */}

        <InputLabel>Weight</InputLabel>

        <InputRangeSlider
          {...RangeSliderModule[1]}
          value={form["newWeight"]}
          onChange={setInput("newWeight")}
        />

        {/*<div className="relative mb-[46px]">
          <InputField
            type="number"
            placeholder="180"
            onChange={setInput("newWeight")}
            value={form["newWeight"]}
          ></InputField>

          <CustomSelect
            list={weightList}
            selected={selectedUnit ? selectedUnit : weightList[0]}
            onChange={changeMedium}
          />
          </div>*/}

        <InputLabel>Heart Rate @ Finish</InputLabel>
        <InputRangeSlider
          {...RangeSliderModule[0]}
          value={form.newHeartRate}
          onChange={setInput("newHeartRate")}
        />
      </StepWrapper>

      {/* save and share goals */}
      <div className="my-16 flex flex-col items-center justify-between gap-5">
        <FilledButton onClick={() => saveYourGoals()} disabled={!isValid}>
          Save Your Goals
        </FilledButton>
        <OutlinedButton onClick={() => setShareGoalsPopup(true)}>
          <span>Share Your Goals</span>
          <span>{share}</span>
        </OutlinedButton>

        <OutlinedButton onClick={prevTab}>Back</OutlinedButton>
      </div>

      {/* learn more block */}

      <LearnMoreBlock></LearnMoreBlock>

      {/* share goals popup */}
      {shareGoalsPopup ? (
        <HeartFitResultsPopup
          form={form}
          close={() => setShareGoalsPopup(false)}
          tab="goals"
        />
      ) : null}
    </div>
  );
}
