import React, { useState, useEffect } from "react";

import { H2, P } from "../../components/Typography";
import { FilledButton, OutlinedButton } from "../../components/Buttons";
import { StepWrapper } from "../../layouts/Steps";

import { setItem, getItem, deleteItem, clearls } from "../../localStore";

export default function Step1({ nextTab, jumpTab, type = "1", stepNo }) {
  const [isFormSave, setIsFormSave] = useState(false);

  useEffect(() => {
    // check whether we have form data in localstorage or not
    if (getItem("forms")) {
      setIsFormSave(true);
    }
  }, []);

  const vitalityScoreHistory = () => {
    if (isFormSave) {
      // jump to vitality score history because we have old form data from localstorage
      jumpTab(4);
    }
  };
  return (
    <div>
      <StepWrapper disabled={type == "1" ? false : true} no={stepNo}>
        <H2>Welcome to the Vitality Score Calculator</H2>
        <P>
          Your Vitality Score indicates your current metabolic health status
          compared to other adults in the US population.
          <br /> <br />A score of 50 suggests that you have an average risk for
          developing metabolic health problems in the future. A hihger score
          indicates better overall metabolic health anda lower risk of
          developing future disease. The good news is that healthy lifestyle
          changes and smart supplementation can improve your Vitality Score over
          time.
        </P>

        <br />
        <span className="text-sm ">
          Vitality Score is based on algorithms developed by MetCalc.org. Ranges
          are based on NHAINES data gathered by CDC
        </span>
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
