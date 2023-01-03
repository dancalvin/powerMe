import React, { useState, useEffect } from "react";
import isToday from "date-fns/isToday";
import differenceInDays from "date-fns/differenceInDays";
import { isSameDay } from "date-fns";
import CustomSelect from "../Index/CustomSelect";
import CustomSelectTime from "../Index/CustomSelectTime";
import { RangeSliderModul } from "../Index/RangeSlider/RangeSliderModul";
import RangeSlider from "../Index/RangeSlider/RangeSlider";
import BasicDatePicker from "../CommonComponents/index";
import { setItem, getItem, deleteItem, clearls } from "../../localStore";

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

const initForm = {
  age: 40,
  sex: "",
  weight: "",
  weightUnit: "(lbs)",
  timeHour: "00",
  timeMinute: "00",
  timeSecond: "00",
  heartRate: 140,
  newWeight: 140,
  newTime: 20,
  diastolicBP: 70,
  newDiastolicBP: 70,
  metabolicAge: 0,
  a1cPref: 0,
  newA1cPref: 0,
  newA1c: 4.7,
};

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
  const [selectedHours, setSelectedHours] = useState(null);
  const [selectedMinutes, setSelectedMinutes] = useState(null);
  const [selectedSeconds, setSelectedSeconds] = useState(null);

  useEffect(() => {
    if (props.hfHistory) {
      setTimeStamp(props.hfHistory.timeStamp);
      setForm(props.hfHistory.form);
      setSelectedHours({ value: props.hfHistory.form.timeHour });
      setSelectedMinutes({ value: props.hfHistory.form.timeMinute });
      setSelectedSeconds({ value: props.hfHistory.form.timeSecond });
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
  return (
    <div className="popup max-[540px]:p-0">
      <div className="popup__inner">
        <div
          className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] md:right-8 md:top-8"
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

          <div className="my-12">
            <BasicDatePicker value={timeStamp} setValue={setTimeStamp} />
          </div>
          <div className="form">
            <h3 className="h3 med">How old are you?</h3>
            <div className="input__calendar">
              <input
                type="number"
                className="input"
                placeholder="40"
                onChange={setInput("age")}
                value={form["age"]}
              />
            </div>
            <h3 className="h3 med">Sex assigned at birth:</h3>
            <div className="input__radio">
              <div className="input__radio-item">
                <input
                  type="radio"
                  name="radio"
                  value="Female"
                  onClick={setInput("sex")}
                  checked={form["sex"] == "Female" ? true : false}
                />
                <label htmlFor=""></label>
                <span>Female</span>
              </div>
              <div className="input__radio-item">
                <input
                  type="radio"
                  name="radio"
                  value="Male"
                  onClick={setInput("sex")}
                  checked={form["sex"] == "Male" ? true : false}
                />
                <label htmlFor=""></label>
                <span>Male</span>
              </div>
              <div className="input__radio-item">
                <input
                  type="radio"
                  name="radio"
                  value="Intersex"
                  onClick={setInput("sex")}
                  checked={form["sex"] == "Intersex" ? true : false}
                />
                <label htmlFor=""></label>
                <span>Intersex</span>
              </div>
              <div className="input__radio-item">
                <input
                  type="radio"
                  name="radio"
                  value="Prefer not to disclose"
                  onClick={setInput("sex")}
                  checked={
                    form["sex"] == "Prefer not to disclose" ? true : false
                  }
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
                onChange={setInput("weight")}
                value={form["weight"]}
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
                selected={selectedHours ? selectedHours : hoursList[0]}
                onChange={changeMediumHour}
                timeUnit="Hours (hr)"
                timeUnitSm="hrs."
              />
              <CustomSelectTime
                list={minuteList}
                selected={selectedMinutes ? selectedMinutes : minuteList[0]}
                onChange={changeMediumMin}
                timeUnit="Minutes (min)"
                timeUnitSm="mins."
              />
              <CustomSelectTime
                list={minuteList}
                selected={selectedSeconds ? selectedMinutes : minuteList[0]}
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

          {props.hfHistory ? (
            <button
              type="button"
              disabled={!isValid}
              className="button primary"
              onClick={updateData}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              disabled={!isValid}
              className="button primary"
              onClick={saveForm}
            >
              Calculate
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditDataPopup;
