import React, { useState, useEffect } from "react";
import { setItem, getItem, deleteItem, clearls } from "../../localStore";

export default function Step1({ form, nextTab, jumpTab, goToTab }) {
  const [isFormSave, setIsFormSave] = useState(false);

  useEffect(() => {
    // check whether we have form data in localstorage or not
    if (getItem("heartFitForms")) {
      setIsFormSave(true);
    }
  }, []);

  const HeartFitHistory = () => {
    if (isFormSave) {
      // jump to vitality score history because we have old form data from localstorage
      goToTab(5);
    }
  };
  return (
    <>
      <div className="step first">
        <h2 className="h2">Welcome to the Heart-Fit Score Calculator</h2>
        <p className="para">
          Your Heart-Fit Score or VO2 max, is a basic number describing your
          general cardiovascular health. <br />
          <br />
          For a Female between the ages of 40-49 a “Good” score is between
          29.0-32.8. For a Male between the ages of 40-49 a “Good” score is
          slightly different ranging 39.0-43.7. Heart-Fit Score simply refers to
          the maximum amount of oxygen that you can utilize during intense
          exercise.
        </p>
      </div>
      <div className="button__outer">
        <button
          type="button"
          className="button primary mirror"
          onClick={nextTab}
        >
          Continue
        </button>

        {isFormSave ? (
          <button
            type="button"
            className="button primary clearDT"
            onClick={HeartFitHistory}
          >
            See Your Heart-Fit Score History
          </button>
        ) : null}
      </div>
    </>
  );
}
