import React from "react";
// get the calendar icon
import { calendar } from "../Base/SVG";

export default function Step2({ form, setCheckbox, setTab, nextTab, setInput }) {
  // the constant is only valid if age and sex are not empty and form race is equal to something
  const isValid =
    form.helpful !== "";

  return (
    <>
      <div className="step first">
        <h2>Was your visit today helpful with your health goals?</h2>
        <div className="form">
          <h3 className="med">Response:</h3>
          <div className="input__radio">
            <div className="input__radio-item">
              <input
                type="radio"
                name="radio"
                value="yes"
                onClick={()=>{ setInput("helpful"); setTab(1) }}
              />
              <label htmlFor=""></label>
              <span>Yes</span>
            </div>
            <div className="input__radio-item">
              <input
                type="radio"
                name="radio"
                value="no"
                onClick={()=>{ setInput("helpful"); setTab(2) }}
              />
              <label htmlFor=""></label>
              <span>No</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}