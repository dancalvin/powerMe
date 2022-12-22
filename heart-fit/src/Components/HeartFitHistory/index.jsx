import React, { useState } from "react";
import HeartFitStatsBlock from "./HeartFitStatsBlock";
import HeartFitScoreHistory from "./HeartFitScoreHistory";
import CustomSelect from "../Index/CustomSelect";
import CustomSelectTime from "../Index/CustomSelectTime";
import { RangeSliderModul } from "../Index/RangeSlider/RangeSliderModul";
import RangeSlider from "../Index/RangeSlider/RangeSlider";
import { filter } from "../Base/SVG";

const weightList = [
  { id: "Pounds", value: "Pounds ", unit: "(lbs)" },
  { id: "Kilograms", value: "Kilograms ", unit: "(kg)" },
  { id: "Pounds", value: "Pounds ", unit: "(lbs)" },
  { id: "Kilograms", value: "Kilograms ", unit: "(kg)" },
  { id: "Gram", value: "Gram ", unit: "(g)" },
];
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
export default function HeartFitHistory({ setInput, form, updateForm }) {
  const [deletePopupToggle, setDeletePopupToggle] = useState(false);
  const [deletePopupGoalToggle, setDeletePopupGoalToggle] = useState(false);
  const [addDataPopupToggle, setAddDataPopupToggle] = useState(false);

  const [tab, setTab] = useState("progress");

  return (
    <div className="container w-full max-w-none  ">
      <div className="max-w-[1080px] m-auto">
        <h1 className="h1 hist fifth">
          Heart-Fit <span>(VO2)</span> History
        </h1>
        <div className="md:mt-12 sm:mt-6">
          <HeartFitStatsBlock
            tab={tab}
            setAddDataPopupToggle={setAddDataPopupToggle}
            setTab={setTab}
          />
          <div className="history">
            <div className="history__filter">
              <div className="form his">
                <div className="input__radio">
                  <div className="input__radio-item">
                    <input type="radio" name="radio" />
                    <label htmlFor=""></label>
                    <span>2022</span>
                  </div>
                  <div className="input__radio-item">
                    <input type="radio" name="radio" />
                    <label htmlFor=""></label>
                    <span>2021</span>
                  </div>
                  <div className="input__radio-item">
                    <input type="radio" name="radio" />
                    <label htmlFor=""></label>
                    <span>2020</span>
                  </div>
                  <div className="input__radio-item">
                    <input type="radio" name="radio" />
                    <label htmlFor=""></label>
                    <span>2019</span>
                  </div>
                  <div className="input__radio-item">
                    <input type="radio" name="radio" />
                    <label htmlFor=""></label>
                    <span>2018</span>
                  </div>
                </div>
              </div>
              <div className="history__filter-icon">{filter}</div>
            </div>
            <div className="history__items">
              {tab === "progress" && (
                <>
                  <HeartFitScoreHistory
                    setDeletePopupToggle={() => setDeletePopupToggle(true)}
                  />
                  <HeartFitScoreHistory
                    setDeletePopupToggle={() => setDeletePopupToggle(true)}
                  />
                </>
              )}
              {tab === "goals" && (
                <>
                  <HeartFitScoreHistory
                    setDeletePopupToggle={() => setDeletePopupGoalToggle(true)}
                  />
                  <HeartFitScoreHistory
                    setDeletePopupToggle={() => setDeletePopupGoalToggle(true)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {deletePopupToggle ? (
        <DeletePopup
          type="assestment"
          date="October 5, 2022"
          score=" 37.3"
          close={() => setDeletePopupToggle(false)}
        />
      ) : null}
      {deletePopupGoalToggle ? (
        <DeletePopup
          type="goal"
          date="October 3, 2022"
          score=" 35.3"
          close={() => setDeletePopupGoalToggle(false)}
        />
      ) : null}
      {addDataPopupToggle ? (
        <AddDataPopup
          setInput={setInput}
          form={form}
          updateForm={updateForm}
          close={() => setAddDataPopupToggle(false)}
        />
      ) : null}
    </div>
  );
}

function DeletePopup(props) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-[0.65] flex justify-center items-center"></div>
      <div className="w-full max-w-5xl mx-4 relative bg-secondary py-12 md:py-16 px-8 md:px-20 z-10">
        <div
          className="w-8 h-8 absolute right-4 top-4 md:right-8 md:top-8 flex justify-center items-center border-[1px] rounded-full cursor-pointer"
          onClick={props.close}
        >
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            <path
              d="M10.8267 12.9723L7.20797 9.35357L3.67244 12.8891L0.989592 10.2063L4.52513 6.67072L0.927201 3.0728L3.46447 0.535534L7.06239 4.13346L10.5979 0.597925L13.2808 3.28077L9.74524 6.8163L13.364 10.435L10.8267 12.9723Z"
              fill="black"
            />
          </svg>
        </div>

        <div>
          <div>
            <p className="text-lg md:text-2xl">
              {props.type === "goal" &&
                "Are you sure you would like to delete this goal?"}
              {props.type === "assestment" &&
                "Are you sure you would like to delete this assessment?"}
            </p>
          </div>
          <div className="mt-6">
            <div className="border-[1px] py-5 px-6 md:px-20 md:border-l-[15px] border-l-primary">
              <h3 className="h3 bold">{props.date}</h3>
              <div className="popup__delete">
                <h3 className="h3 big">Your Heart-Fit Score</h3>
                <h2 className="h2 big">{props.score}</h2>
              </div>
            </div>

            <div>
              <button className="bg-black rounded-3xl py-3 px-6 md:px-12 font-montserrat font-bold text-base md:text-xl leading-[24px] text-center text-secondary mt-10 mr-4 border-[1px]">
                Delete
              </button>

              <button
                className="rounded-3xl py-3 px-6 md:px-12 font-montserrat font-bold text-base md:text-xl leading-[24px] text-center text-black mt-10 border-[1px]"
                onClick={props.close}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddDataPopup(props) {
  const [select, setSelect] = useState();
  const setWeightUnit = (data) => props.updateForm({ weightUnit: data });
  const setHourVal = (data) => props.updateForm({ timeHour: data });
  const setMinuteVal = (data) => props.updateForm({ timeMinute: data });
  const setSecondVal = (data) => props.updateForm({ timeSecond: data });
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  const isValid =
    props.form.age !== "" &&
    props.form.sex !== "" &&
    props.form.weight !== "" &&
    props.form.weightUnit !== "" &&
    props.form.timeHour !== "00" &&
    props.form.timeMinute !== "00" &&
    props.form.timeSecond !== "00" &&
    props.form.heartRate !== "";
  const changeMedium = (item) => {
    setWeightUnit(item.unit);
    setSelect(item.id);
  };

  const changeMediumHour = (item) => {
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
  const validation = () => {
    if (isValid) {
      props.close();
    }
  };
  return (
    <div className="popup">
      <div className="popup__inner">
        <div
          className="w-8 h-8 absolute right-4 top-4 md:right-8 md:top-8 flex justify-center items-center border-[1px] rounded-full cursor-pointer"
          onClick={props.close}
        >
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            <path
              d="M10.8267 12.9723L7.20797 9.35357L3.67244 12.8891L0.989592 10.2063L4.52513 6.67072L0.927201 3.0728L3.46447 0.535534L7.06239 4.13346L10.5979 0.597925L13.2808 3.28077L9.74524 6.8163L13.364 10.435L10.8267 12.9723Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="popup__addData">
          <h2 className="h2 sm">
            Add historical data to calculate a Heart-Fit score
          </h2>
          <div className="form">
            <h3 className="h3 med">How old are you?</h3>
            <div className="input__calendar">
              <input
                type="number"
                className="input"
                placeholder="40"
                onChange={props.setInput("age")}
              />
            </div>
            <h3 className="h3 med">Sex assigned at birth:</h3>
            <div className="input__radio">
              <div className="input__radio-item">
                <input
                  type="radio"
                  name="radio"
                  value="Female"
                  onClick={props.setInput("sex")}
                />
                <label htmlFor=""></label>
                <span>Female</span>
              </div>
              <div className="input__radio-item">
                <input
                  type="radio"
                  name="radio"
                  value="Male"
                  onClick={props.setInput("sex")}
                />
                <label htmlFor=""></label>
                <span>Male</span>
              </div>
              <div className="input__radio-item">
                <input
                  type="radio"
                  name="radio"
                  value="Intersex"
                  onClick={props.setInput("sex")}
                />
                <label htmlFor=""></label>
                <span>Intersex</span>
              </div>
              <div className="input__radio-item">
                <input
                  type="radio"
                  name="radio"
                  value="Prefer not to disclose"
                  onClick={props.setInput("sex")}
                />
                <label htmlFor=""></label>
                <span>Prefer not to disclose</span>
              </div>
            </div>
            <h3 className="h3 med">Weight</h3>
            <div className="input__measure">
              <input
                type="number"
                className="input"
                placeholder="#"
                onChange={props.setInput("weight")}
              />
              <CustomSelect
                list={weightList}
                selected={weightList[0]}
                onChange={changeMedium}
              />
            </div>
            <h3 className="h3 med">Time</h3>
            <div className="time">
              <CustomSelectTime
                list={hoursList}
                selected={hoursList[0]}
                onChange={changeMedium}
                timeUnit="Hours (hr)"
                timeUnitSm="hrs."
              />
              <CustomSelectTime
                list={minuteList}
                selected={minuteList[0]}
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
              value={props.form.heartRate}
              onChange={props.setInput("heartRate")}
            />
          </div>
          <button
            type="button"
            disabled={!isValid}
            className="button primary"
            onClick={validation}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}
