import React, { useState, useEffect } from "react";
import { share } from "../Base/SVG";
import RangeSlider from "./RangeSlider/RangeSlider";
import CustomSelectTime from "./CustomSelectTime";
import { RangeSliderModul } from "./RangeSlider/RangeSliderModul";
import { getVitalityScore, getMetaAge } from "../../utils";
import HeartFitScore from "./HeartFitScore";
import { closeIcon } from "../Base/SVG";

import { hoursList, minuteList } from "./Step3";
export default function Step5({
  prevTab,
  nextTab,
  goToTab,
  setInput,
  updateForm,
  form,
  saveYourGoals,
}) {
  const [hScore, setHScore] = useState("");
  const [shareGoalsPopup, setShareGoalsPopup] = useState(false);
  const [selectedHRHours, setSelectedHRHours] = useState(null);
  const [selectedHRMinutes, setSelectedHRMinutes] = useState(null);
  const [selectedHRSeconds, setSelectedHRSeconds] = useState(null);

  useEffect(() => {
    setSelectedHRHours({ value: form.newHeartRateTimeHour });
    setSelectedHRMinutes({ value: form.newHeartRateTimeMinute });
    setSelectedHRSeconds({ value: form.newHeartRateTimeSecond });
  }, []);

  const changeHeartRateHour = (item) => {
    updateForm({ newHeartRateTimeHour: item.value });
    setSelectedHRHours({ value: item.value });
  };
  const changeHeartRateMinute = (item) => {
    updateForm({ newHeartRateTimeMinute: item.value });
    setSelectedHRMinutes({ value: item.value });
  };
  const changeHeartRateSecond = (item) => {
    updateForm({ newHeartRateTimeSecond: item.value });
    setSelectedHRSeconds({ value: item.value });
  };

  return (
    <>
      <div className="step__outer">
        <div className="step fifth">
          <HeartFitScore form={form} tab="goals" />
          <h3 className="h3 med">Mile Time</h3>
          <RangeSlider
            {...RangeSliderModul[2]}
            value={form.newTime}
            onChange={setInput("newTime")}
            unit=" min."
            plus={true}
          />
          <h3 className="h3 med">Weight</h3>
          <RangeSlider
            {...RangeSliderModul[1]}
            value={form.newWeight}
            onChange={setInput("newWeight")}
            unit=" lbs."
            plus={true}
          />
          <h3 className="h3 med">Heart Rate @ Finish</h3>

          <RangeSlider
            {...RangeSliderModul[0]}
            value={form.newHeartRate}
            onChange={setInput("newHeartRate")}
          />

          <div className="time mt-4">
            <CustomSelectTime
              list={hoursList}
              selected={selectedHRHours ? selectedHRHours : hoursList[0]}
              onChange={changeHeartRateHour}
              timeUnit="Hours (hr)"
              timeUnitSm="hrs."
            />
            <CustomSelectTime
              list={minuteList}
              selected={selectedHRMinutes ? selectedHRMinutes : minuteList[0]}
              onChange={changeHeartRateMinute}
              timeUnit="Minutes (min)"
              timeUnitSm="mins."
            />
            <CustomSelectTime
              list={minuteList}
              selected={selectedHRSeconds ? selectedHRSeconds : minuteList[0]}
              onChange={changeHeartRateSecond}
              timeUnit="Seconds (s)"
              timeUnitSm="sec."
            />
          </div>
        </div>
        <div className="steps__inner-goals-btns">
          <button
            type="submit"
            className="button primary mirror"
            onClick={saveYourGoals}
          >
            Save Your Goals
          </button>

          <button
            type="button"
            className="button primary clearDT mirror share"
            onClick={() => setShareGoalsPopup(true)}
          >
            Share <span>Your Goals</span>
            {share}
          </button>

          <div style={{ marginTop: "32px" }}>
            <button
              type="button"
              className="button primary clearDT mirror share"
              onClick={prevTab}
            >
              Back
            </button>
          </div>
        </div>
        <div className="step add">
          <div className="step__image">
            <img src="/images/powerme.png" alt="powerme" />
          </div>
          <div className="step__content">
            <h2 className="h2">To Learn More</h2>
            <h3 className="h3 light">
              To better understand your health,{" "}
              <a href="https://apps.powerme.health/shop">
                purchase a PowerMe Metabolic Health Kit
              </a>
            </h3>
            <h3 className="h3 light">
              To find resources on bettering your health outcomes,{" "}
              <a href="http://powermeacademy.flywheelsites.com/">
                visit the PowerMe Academy
              </a>
            </h3>
          </div>
        </div>

        {shareGoalsPopup ? (
          <GoalsToShare
            form={form}
            setShareGoalsPopup={setShareGoalsPopup}
            tab="goals"
          />
        ) : null}
      </div>
    </>
  );
}

export function GoalsToShare({ form, setShareGoalsPopup, tab }) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 m-7 max-[540px]:m-0 ">
      <div
        className="fixed top-0 left-0 bottom-0 right-0 -z-[1] flex items-center justify-center bg-black opacity-[0.65]"
        onClick={() => setShareGoalsPopup(false)}
      ></div>

      <div className="relative mx-auto flex h-full max-w-[1280px] items-center justify-center overflow-auto bg-secondary py-10 px-20 max-[540px]:px-5">
        <div
          className="absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px]"
          onClick={() => setShareGoalsPopup(false)}
        >
          {closeIcon}
        </div>
        <HeartFitScore form={form} tab={tab} />
      </div>
    </div>
  );
}
