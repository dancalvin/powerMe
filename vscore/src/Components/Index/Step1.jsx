import React, { useEffect, useState } from "react";
import { setItem, getItem, deleteItem, clearls } from "../../localStore";

export default function Step1({ form, nextTab, jumpTab }) {
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
    <>
      <div className="step first ">
        <h2>Welcome to the Vitality Score Calculator</h2>
        <p className="">
          Your Vitality Score indicates your current metabolic health status
          compared to other adults in the US population.
          <br />
          <br />A score of 50 suggests that you have an average risk for
          developing metabolic health problems in the future. A hihger score
          indicates better overall metabolic health anda lower risk of
          developing future disease. The good news is that healthy lifestyle
          changes and smart supplementation can improve your Vitality Score over
          time.
        </p>
        <br />
        <span className="finePrint">
          Vitality Score is based on algorithms developed by MetCalc.org. Ranges
          are based on NHAINES data gathered by CDC
        </span>
      </div>
      <div className="gapDT"></div>

      <button
        type="button"
        className="button primary mirror sm:!w-none !w-full !border-[1px] text-[16px] sm:text-[20px]"
        onClick={nextTab}
      >
        Continue
      </button>
      {isFormSave ? (
        <button
          type="button"
          className="button primary mirror sm:!w-none !w-full !border-[1px] !border-black !bg-transparent text-[16px] !text-black hover:!bg-primary hover:!text-white sm:text-[20px]"
          onClick={vitalityScoreHistory}
        >
          See Your Vitality Score History
        </button>
      ) : null}
    </>
  );
}
