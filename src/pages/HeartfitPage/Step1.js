import React, { useState, useEffect } from "react";

import { H2, P } from "../../components/Typography";
import { FilledButton, OutlinedButton } from "../../components/Buttons";
import { StepWrapper } from "../../layouts/Steps";

import { setItem, getItem, deleteItem, clearls } from "../../localStore";

export default function Step1({ nextTab, jumpTab, stepNo }) {
  const [isFormSave, setIsFormSave] = useState(false);

  useEffect(() => {
    // check whether we have form data in localstorage or not
    if (getItem("heartFitForms")) {
      setIsFormSave(true);
    }
  }, []);

  const vitalityScoreHistory = () => {
    if (isFormSave) {
      // jump to vitality score history because we have old form data from localstorage
      jumpTab(3);
    }
  };
  return (
    <div>
      <StepWrapper no={stepNo}>
        <H2>Welcome to the Heart-Fit Score Calculator</H2>
        <P>
          Your Vitality Score indicates your current metabolic health status
          compared to other adults in the US population.
          <br /> <br />
          For a Female between the ages of 40-49 a “Good” score is between
          29.0-32.8. For a Male between the ages of 40-49 a “Good” score is
          slightly different ranging 39.0-43.7. Heart-Fit Score simply refers to
          the maximum amount of oxygen that you can utilize during intense
          exercise.
        </P>
      </StepWrapper>
      <div className="mt-10 flex flex-col items-center justify-center gap-[20px] sm:mt-24">
        <FilledButton onClick={nextTab}>Continue</FilledButton>

        {isFormSave ? (
          <OutlinedButton onClick={vitalityScoreHistory}>
            See Your Vitality Score History
          </OutlinedButton>
        ) : null}
      </div>
    </div>
  );
}
