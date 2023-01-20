import React, { useState } from "react";
import { H1, H2, H3, P, P2 } from "../../components/Typography";
import { FilledButton, OutlinedButton } from "../../components/Buttons";
import { StepWrapper } from "../../layouts/Steps";

import HeartFitScore from "./HeartFitScore";
import { HeartFitResultsPopup } from "./HeartFitResultsPopup";

import { share } from "../../components/Svgs";

export default function Step4({ form, nextTab, goToTab, jumpTab, stepNo }) {
  const [shareResultsPopup, setShareResultsPopup] = useState(false);
  return (
    <div>
      <HeartFitScore form={form} />

      <StepWrapper no={stepNo}>
        <H2>What Your Results Mean</H2>
        <P2>
          Your Heart-Fit Score indicates your current cardiovascular health
          according to Rockport Mile calculations. A higher score suggests
          better overall cardiovascular health. The good news is that healthy
          lifestyle changes and smart supplementation can improve your Heart-Fit
          Score over time.
        </P2>
      </StepWrapper>

      <div className="mt-10 flex flex-col items-center justify-center gap-[20px] lg:mt-20">
        <FilledButton onClick={nextTab}>Set Goals</FilledButton>
        <OutlinedButton onClick={() => setShareResultsPopup(true)}>
          <span>Share Your Results</span>
          <span>{share}</span>
        </OutlinedButton>
      </div>

      <div className="mx-auto mt-5 flex max-w-[750px] flex-col items-center justify-center gap-[20px] lg:mt-12 lg:flex-row">
        <OutlinedButton
          onClick={() => {
            goToTab(0);
          }}
        >
          Retake Test
        </OutlinedButton>
        <OutlinedButton
          onClick={() => {
            jumpTab(5);
          }}
        >
          View Your Heart-Fit History{" "}
        </OutlinedButton>
      </div>

      {shareResultsPopup ? (
        <HeartFitResultsPopup
          close={() => setShareResultsPopup(false)}
          form={form}
        />
      ) : null}
    </div>
  );
}

//const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// make a function that will take in A1C value and convert it to glucose then update both corresponding form values
function handleSugarChangeA1CToGlucose(evt, setInputDirect) {
  let sugarNumber = 0;
  if (evt.target.value === 0) {
    sugarNumber = parseInt(evt.target.value);
  } else {
    sugarNumber = parseInt(parseFloat(evt.target.value) * 28.7 - 46.7);
  }
  setInputDirect("a1c", evt.target.value, "glucose", sugarNumber);
}

// make a function that will take in glucose integer value and convert it to a1c percent by then update both corresponding form values
function handleSugarChangeGlucoseToA1C(evt, setInputDirect) {
  let sugarNumber = 0;
  if (evt.target.value === 0) {
    sugarNumber = parseInt(evt.target.value);
  } else {
    sugarNumber = parseFloat((parseInt(evt.target.value) + 46.7) / 28.7);
  }
  setInputDirect("glucose", evt.target.value, "a1c", sugarNumber.toFixed(1));
}
