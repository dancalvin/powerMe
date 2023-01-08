import React, { useState } from "react";
import CustomSelectTime from "./CustomSelectTime";

import CustomSelect from "./CustomSelectTime";
import RangeSlider from "./RangeSlider/RangeSlider";
import { RangeSliderModul } from "./RangeSlider/RangeSliderModul";

const hoursList = [
  { id: "0", value: "00 " },
  { id: "1", value: "01 " },
  { id: "2", value: "02 " },
  { id: "3", value: "03 " },
  { id: "4", value: "04 " },
  { id: "5", value: "05 " },
  { id: "6", value: "06 " },
  { id: "7", value: "07 " },
  { id: "8", value: "08 " },
  { id: "9", value: "09 " },
  { id: "10", value: "10 " },
  { id: "11", value: "11 " },
  { id: "12", value: "12 " },
  { id: "13", value: "13 " },
  { id: "14", value: "14 " },
  { id: "15", value: "15 " },
  { id: "16", value: "16 " },
  { id: "17", value: "17 " },
  { id: "18", value: "18 " },
  { id: "19", value: "19 " },
  { id: "20", value: "20 " },
  { id: "21", value: "21 " },
  { id: "22", value: "22 " },
  { id: "23", value: "23 " },
  { id: "24", value: "24 " },
];
const minuteList = [
  { id: "0", value: "00" },
  { id: "1", value: "01" },
  { id: "2", value: "02" },
  { id: "3", value: "03" },
  { id: "4", value: "04" },
  { id: "5", value: "05" },
  { id: "6", value: "06" },
  { id: "7", value: "07" },
  { id: "8", value: "08" },
  { id: "9", value: "09" },
  { id: "10", value: "10" },
  { id: "11", value: "11" },
  { id: "12", value: "12" },
  { id: "13", value: "13" },
  { id: "14", value: "14" },
  { id: "15", value: "15" },
  { id: "16", value: "16" },
  { id: "17", value: "17" },
  { id: "18", value: "18" },
  { id: "19", value: "19" },
  { id: "20", value: "20" },
  { id: "21", value: "21" },
  { id: "22", value: "22" },
  { id: "23", value: "23" },
  { id: "24", value: "24" },
  { id: "25", value: "25" },
  { id: "26", value: "26" },
  { id: "27", value: "27" },
  { id: "28", value: "28" },
  { id: "29", value: "29" },
  { id: "30", value: "30" },
  { id: "31", value: "31" },
  { id: "32", value: "32" },
  { id: "33", value: "33" },
  { id: "34", value: "34" },
  { id: "35", value: "35" },
  { id: "36", value: "36" },
  { id: "37", value: "37" },
  { id: "38", value: "38" },
  { id: "39", value: "39" },
  { id: "40", value: "40" },
  { id: "41", value: "41" },
  { id: "42", value: "42" },
  { id: "43", value: "43" },
  { id: "44", value: "44" },
  { id: "45", value: "45" },
  { id: "46", value: "46" },
  { id: "47", value: "47" },
  { id: "48", value: "48" },
  { id: "49", value: "49" },
  { id: "50", value: "50" },
  { id: "51", value: "51" },
  { id: "52", value: "52" },
  { id: "53", value: "53" },
  { id: "54", value: "54" },
  { id: "55", value: "55" },
  { id: "56", value: "56" },
  { id: "57", value: "57" },
  { id: "58", value: "58" },
  { id: "59", value: "59" },
  { id: "60", value: "60" },
];

// the main export of this jsx file
export default function Step3({
  nextTab,
  prevTab,
  setInput,
  updateForm,
  form,
}) {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const setHourVal = (data) => updateForm({ timeHour: data });
  const setMinuteVal = (data) => updateForm({ timeMinute: data });
  const setSecondVal = (data) => updateForm({ timeSecond: data });
  const isValid = form.timeMinute !== "00" && form.heartRate !== "";
  const changeMedium = (item) => {
    setHourVal(item.value);
    setHour(item.value);
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
    <>
      <div className="step third">
        <h2 className="h2">Test Yourself</h2>

        <div className="form">
          <h3 className="h3 light">
            To perform the Rockport walking test:
            <br />
            <br />
            <ul className="uniqList">
              <li>Warm up for 5 to 10 minutes with easy walking.</li>
              <br />
              <li>
                On a track return to the starting line. If walking on the street
                begin where you know the exact distance from your starting
                location
              </li>
              <br />
              <li>
                Start your stopwatch and immediately start walking as fast as
                you can. Make every effort to push yourself, but avoid jogging.
              </li>
              <br />
              <li>
                At the end of the 1 mile mark, stop your stopwatch and record
                your time.
              </li>
              <br />
              <li>
                Take your heart rate immediately, whether by heart rate monitor
                or manually. If taking your own pulse, count the heartbeats for
                15 seconds and multiply by four. For example, if there are 40
                heartbeats in 15 seconds, your heart rate would be 160 beats per
                minute (bpm).
              </li>
            </ul>
          </h3>
          <h3 className="h3 med">Time</h3>
          <div className="time">
            <CustomSelectTime
              list={hoursList}
              selected={hoursList[0]}
              //selected={form["timeHour"]}
              onChange={changeMedium}
              timeUnit="Hours (hr)"
              timeUnitSm="hrs."
            />
            <CustomSelectTime
              list={minuteList}
              selected={minuteList[0]}
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

          <h3 className="h3 med">Heart Rate @ Finish</h3>

          <RangeSlider
            {...RangeSliderModul[0]}
            value={form.heartRate}
            onChange={setInput("heartRate")}
          />
        </div>
      </div>

      <div className="button__outer">
        <button
          type="button"
          className="button primary !w-full"
          disabled={!isValid}
          onClick={nextTab}
        >
          Continue
        </button>
        <button
          type="button"
          className="button primary clearDT back max-[540px]:!mx-0 max-[540px]:!w-full"
          onClick={prevTab}
        >
          Back
        </button>
      </div>
    </>
  );
}
