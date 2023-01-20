import React, { useState, useEffect } from "react";
import { getYear } from "date-fns";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import rangeSliderstyles from "./styles/InputRangeSlider.module.css";
import { filter } from "../Svgs";

export function InputField(props) {
  return (
    <div className="relative mb-10 sm:mb-[52px]">
      <input
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder ? props.placeholder : ""}
        onChange={props.onChange}
        value={props.value}
        className="w-full border-[1px] border-solid border-black bg-secondary py-[13px] px-5 font-sans text-base font-[400] leading-6 text-black outline-none sm:text-xl sm:font-light sm:leading-6"
      />
    </div>
  );
}

export function InputLabel(props) {
  return (
    <p className="mb-4">
      <label
        className={`font-sans text-base font-bold leading-6 text-black sm:text-xl sm:font-medium`}
      >
        {props.children}
      </label>
    </p>
  );
}

/*
export function InputFieldLabel(props) {
  return (
    <div className="relative">
      <InputLabel>{props.label}</InputLabel>
      <InputField></InputField>
    </div>
  );
}
*/

export function InputCheckbox({ label, name, value, checked, onClick }) {
  return (
    <div className="relative mb-5 flex h-[35px] items-center pl-[55px]">
      <input
        type="checkbox"
        className="bg-none absolute top-0 left-0 z-[1] h-full w-full cursor-pointer appearance-none opacity-0 outline-none"
        name={name ? name : ""}
        value={value ? value : ""}
        checked={checked ? checked : false}
        onClick={onClick}
      />
      <label
        htmlFor=""
        className={`border-color absolute top-0 left-0 h-[40px] w-[40px] border-[1px] border-solid bg-secondary transition-all duration-200 ease-in-out before:absolute sm:h-[35px] sm:w-[35px] ${
          checked
            ? "before:visible before:opacity-[1] "
            : "before:hidden before:opacity-0 "
        } before:absolute before:top-[5px] before:left-[13px] before:h-[18px] before:w-[10px] before:rotate-45 before:border-b-2 before:border-r-2 before:border-b-black  before:border-r-black before:bg-transparent before:transition-all before:duration-200 before:ease-in-out before:content-[""] sm:before:top-1 sm:before:left-3 sm:before:h-4 sm:before:w-2`}
      ></label>
      <span className="font-sans text-base leading-6 text-black sm:text-xl">
        {label}
      </span>
    </div>
  );
}

export function InputRadio({ label, name, value, checked, onClick }) {
  return (
    <div className="relative mb-3 flex h-[35px] items-center pl-[55px] sm:mb-4">
      <input
        type="radio"
        name={name ? name : ""}
        value={value ? value : ""}
        checked={checked ? checked : false}
        onClick={onClick}
        className="bg-none absolute top-0 left-0 z-[1] h-full w-full cursor-pointer appearance-none opacity-0 outline-none"
      />

      <label
        htmlFor=""
        className={`border-color absolute top-0 left-0 h-[40px] w-[40px] rounded-full border-[1px] border-solid bg-secondary transition-all duration-200 ease-in-out before:absolute before:top-1/2 before:left-1/2 before:h-[23px] before:w-[23px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-black before:transition-all before:duration-200 before:ease-in-out before:content-[""] sm:h-[35px] sm:w-[35px] ${
          checked
            ? "before:visible before:opacity-[1]"
            : "before:hidden before:opacity-0"
        }`}
      ></label>
      <span className="font-sans text-base leading-6 text-black sm:text-xl">
        {label}
      </span>
    </div>
  );
}

export default function BasicDatePicker(props) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={props.value}
          onChange={(newValue) => {
            props.setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export function InputRangeSlider(props) {
  const style = (props.value - props.min) * (100 / (props.max - props.min));
  const sliderUnit = props.unit ? props.unit : "";
  const classes = props.clName.split(" ");
  return (
    <div
      className={`${classes[0] ? rangeSliderstyles[classes[0]] : ""} ${
        classes[0] ? rangeSliderstyles[classes[1]] : ""
      } ${classes[0] ? rangeSliderstyles[classes[2]] : ""} mb-[12px] sm:!mb-6`}
    >
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.stepAmount !== "" ? props.stepAmount : "1"}
        value={props.value}
        onChange={props.onChange}
        className={rangeSliderstyles["rangeSlider__input"]}
      />
      <span className={rangeSliderstyles["rangeSlider-min"]}>{props.min}</span>
      <span className={rangeSliderstyles["rangeSlider-max"]}>
        {props.max}
        {props.plus ? "+" : ""}
      </span>

      {props.text ? (
        <span className={rangeSliderstyles["rangeSlider__optimal"]}>
          {props.text}
        </span>
      ) : null}

      <span
        className={rangeSliderstyles["rangeSlider__value"]}
        style={{ left: style + "%", transform: `translateX(-${style}%)` }}
      >
        {props.value}
        {sliderUnit}
      </span>
    </div>
  );
}

export const YearsListAsFilter = (props) => {
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [hitoryYearsList, setHitoryYearsList] = useState([]);
  const [historyYear, setHistoryYear] = useState(0);
  useEffect(() => {
    const currentYear = getYear(new Date());
    const ylist = [];
    for (let i = 0; i < 5; i++) {
      ylist.push(currentYear - i);
    }

    setHitoryYearsList(ylist);
    if (props.historyYear) {
      setHistoryYear(props.historyYear);
    } else {
      setHistoryYear(ylist[0]);
    }
  }, [props]);

  return (
    <div className="mb-[25px] flex flex-row flex-nowrap items-start justify-end md:justify-between">
      <div
        className={`absolute top-[40px] right-[30px] z-[1] w-[200px] bg-secondary p-[30px] shadow-2xl transition-all duration-200 md:relative md:top-auto md:right-0 md:w-full md:bg-transparent md:p-0 md:shadow-none ${
          filterVisibility ? "visible md:visible" : "hidden md:block"
        }`}
      >
        <div className=" flex flex-col flex-nowrap items-start justify-start gap-[25px] md:flex-row">
          {hitoryYearsList.map((year, index) => (
            <div key={index}>
              <InputRadio
                label={year}
                value={year}
                onClick={() => props.setHistoryYear(year)}
                checked={year == historyYear ? true : false}
              ></InputRadio>
            </div>
          ))}
        </div>
      </div>
      <div
        className="block h-8 w-8 cursor-pointer md:hidden"
        onClick={() => setFilterVisibility(!filterVisibility)}
      >
        {filter}
      </div>
    </div>
  );
};

/*    
export function InputRangeSlider(props) {
  const style = (props.value - props.min) * (100 / (props.max - props.min));
  const sliderUnit = props.unit ? props.unit : "";
  return (
    <div
      className={`before:bg-none relative mb-[52px] mt-[72px] h-[70px] w-full bg-secondary pb-11 before:absolute before:left-[${props.rangeStart}] before:bottom-[34px] before:h-[12px] before:w-[${props.rangeWidth}] before:max-w-[274px] before:-translate-x-1/2 before:border-[1px] before:border-t-0 before:border-solid before:border-black before:content-[""] after:absolute after:left-[${props.verticalBarPosition}] after:bottom-6 after:h-[10px] after:w-[1px] after:-translate-x-1/2 after:bg-black after:content-[""]`}
    >
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.stepAmount !== "" ? props.stepAmount : "1"}
        value={props.value}
        onChange={props.onChange}
        className="relative h-5 w-full appearance-none rounded-[50px] border-[1px] border-solid border-black"
        style={{
          background:
            "linear-gradient(90deg, rgba(242, 100, 78, 0) 23.75%, #f2644e 40%, rgba(242, 100, 78, 0) 55.18%)",
        }}
      />
      <span className="absolute left-0 bottom-0 font-sans text-xl font-light leading-6 text-black">
        {props.min}
      </span>
      <span className="absolute right-0 bottom-0 font-sans text-xl font-light leading-6 text-black">
        {props.max}
      </span>
      <span
        className={`absolute bottom-[2px] left-[41%] w-[70%] -translate-x-1/2 text-center font-sans text-base leading-5 text-black `}
      >
        {props.text}
      </span>

      <span
        className="absolute -top-11 text-center font-sans text-2xl font-bold leading-7 text-black"
        style={{ left: style + "%", transform: `translateX(-${style}%)` }}
      >
        {props.value}
        {sliderUnit}
      </span>
    </div>
  );
}
*/
