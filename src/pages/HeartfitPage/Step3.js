import React, { useState } from "react";

import { H2, P2 } from "../../components/Typography";
import { FilledButton, OutlinedButton } from "../../components/Buttons";
import {
  InputLabel,
  InputField,
  InputRangeSlider,
} from "../../components/Inputs";

import { StepWrapper } from "../../layouts/Steps";
import CustomSelectTime from "../../components/Inputs/CustomSelectTime";
import {
  minuteList,
  RangeSliderModuleForHeartFit as RangeSliderModule,
} from "../../utils/DataStore";

export default function Step3({
  nextTab,
  prevTab,
  setInput,
  updateForm,
  form,
  stepNo,
}) {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const setMinuteVal = (data) => updateForm({ timeMinute: data });
  const setSecondVal = (data) => updateForm({ timeSecond: data });
  const isValid = form.timeMinute !== "00" && form.heartRate !== "";

  const changeMediumMin = (item) => {
    setMinuteVal(item.value);
    setMinute(item.value);
  };
  const changeMediumSec = (item) => {
    setSecondVal(item.value);
    setSecond(item.value);
  };
  return (
    <div>
      <StepWrapper no={stepNo}>
        <H2>Test Yourself</H2>
        <P2>To perform the Rockport walking test:</P2>

        <div>
          <ul className="mb-8 ml-6 list-disc sm:ml-8 sm:mb-0">
            <li>
              <P2>Warm up for 5 to 10 minutes with easy walking.</P2>
            </li>
            <li>
              <P2>
                On a track return to the starting line. If walking on the street
                begin where you know the exact distance from your starting
                location
              </P2>
            </li>
            <li>
              <P2>
                Start your stopwatch and immediately start walking as fast as
                you can. Make every effort to push yourself, but avoid jogging.
              </P2>
            </li>
            <li>
              <P2>
                At the end of the 1 mile mark, stop your stopwatch and record
                your time.
              </P2>
            </li>
            <li>
              <P2>
                Take your heart rate immediately, whether by heart rate monitor
                or manually. If taking your own pulse, count the heartbeats for
                15 seconds and multiply by four. For example, if there are 40
                heartbeats in 15 seconds, your heart rate would be 160 beats per
                minute (bpm).
              </P2>
            </li>
          </ul>
        </div>

        {/* form */}

        <div>
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

          {/**
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
      </StepWrapper>

      <div className="mt-10 flex flex-col items-center justify-center gap-[20px] sm:mt-24">
        <FilledButton onClick={nextTab} disabled={!isValid}>
          Continue
        </FilledButton>
        <OutlinedButton onClick={prevTab}>Back</OutlinedButton>
      </div>
    </div>
  );
}
