import React from "react";
import { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import CircleModel from "./CircleModel/CircleModel";
import { RangeSliderModul } from "./RangeSlider/RangeSliderModul";
import VitalityScore from "./VitalityScore";
import MetaCalc from "./CircleModel/MetaCalc.jsx";
import VitalityScoreGraph from "../VitalityHistory/VitalityScoreGraph";
import { getMetaAge } from "../../utils";

export default function Step5({
  form,
  setInput,
  setInputDirect,
  nextTab,
  saveYourGoals,
}) {
  const [metaAge, setMetaAge] = useState(0);
  const [shareResultsPopup, setShareResultsPopup] = useState(false);
  const [shareGoalsPopup, setShareGoalsPopup] = useState(false);
  useEffect(() => {
    const metaAgeData = getMetaAge({ ...form });
    setMetaAge(metaAgeData);
  });

  return (
    <>
      <div className="step__outer">
        <VitalityScore
          form={form}
          score={0}
          title="Your Vitality Score Could Be:"
          image="/images/graph.png"
          clName="vitality"
        />

        <div className="relative flex flex-row flex-nowrap  sm:mt-16 sm:border-[1px] sm:border-l-[15px] sm:border-l-primary ">
          <div
            className={`flex w-full grow flex-col-reverse flex-nowrap justify-between py-10 px-6 sm:pl-6 md:flex-row md:pl-20`}
          >
            <div className="flex flex-row justify-between md:flex-col md:gap-10">
              <div className=" md:border-0">
                <h3 className="font-montserrat text-base leading-[39px] text-primary md:text-3xl">
                  Your Metabolic Age{" "}
                </h3>

                <p className="md:text-normal font-montserrat text-[40px] font-bold leading-[110%] text-primary md:text-[80px] md:font-normal md:leading-[98px] ">
                  {metaAge}
                </p>
              </div>

              <div>
                <h3 className="font-montserrat text-base leading-[39px] text-[#7C5D7A] md:text-3xl">
                  Your Calendar Age{" "}
                </h3>
                <p className="md:text-normal font-montserrat text-[40px] font-bold leading-[110%] text-[#7C5D7A] md:text-[80px] md:font-normal md:leading-[98px]">
                  {form.age}
                </p>
              </div>
            </div>
            <div className="doterraColumn flex items-center">
              <div className="relative mx-auto hidden h-[200px] min-w-[200px] max-w-[300px] grow max-[580px]:block">
                <VitalityScoreGraph value1={metaAge} value2={form.age} />

                <div className="absolute right-0 left-0 top-0 bottom-0 flex items-center justify-center">
                  <p className="text-xl font-bold">
                    <span className="text-primary">{metaAge}</span>/
                    <span className="text-third">{form.age}</span>
                  </p>
                </div>
              </div>

              <div className="mx-auto block max-[580px]:hidden">
                <CircleModel metabolicAge={metaAge} actualAge={form.age} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[60px]">
          <button
            type="submit"
            onClick={nextTab}
            className="button primary mirror !w-full !max-w-[375px] border-[1px]"
            style={{
              display: "flex",
              gridGap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            View History
          </button>

          <button
            type="button"
            className="button primary clearDT mirror !mb-[60px]  !w-full !max-w-[375px]"
            style={{
              display: "flex",
              gridGap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setShareResultsPopup(true)}
          >
            Share Your Results{" "}
            <img
              className="shareIcon"
              src={process.env.PUBLIC_URL + "/images/share.svg"}
              alt="share-icon"
              style={{ top: 0 }}
            />
          </button>
        </div>

        <div className="step">
          <h2 className="h2">What Your Results Mean </h2>
          <h3 className="light h3">
            Your Vitality Score indicates your current metabolic health status
            compared to other adults in the US population.
            <br />
            <br />A score of 50 suggests that you are of average health and have
            an average risk for developing metabolic health problems in the
            future. The higher your score, suggests better overall metabolic
            health. The good news is that healthy lifestyle changes and smart
            supplementation can improve your Vitality Score over time.
          </h3>
        </div>

        <div className="step fourth">
          <VitalityScore
            score={1}
            form={form}
            title="Your Vitality Score Could Be"
            image="/images/graph2.png"
            clName="vitality new"
          />
          <h3 className="med h3">Weight</h3>
          <RangeSlider
            {...RangeSliderModul[4]}
            value={form.newWeight}
            onChange={setInput("newWeight")}
            unit=" lbs."
          />
          <h3 className="med h3">Waist</h3>
          <RangeSlider
            {...RangeSliderModul[6]}
            value={form.newWaist}
            onChange={setInput("newWaist")}
            unit=" in."
          />
          <h3 className="med h3">Systolic Blood Pressure (mmHg)</h3>
          <RangeSlider
            {...RangeSliderModul[0]}
            value={form.newPressure}
            onChange={setInput("newPressure")}
            clName="rangeSlider new pressure"
            unit=" mmHG"
          />
          <h3 className="med h3">Diastolic Blood Pressure (mmHg)</h3>
          <RangeSlider
            {...RangeSliderModul[5]}
            value={form.newDiastolicBP}
            onChange={setInput("newDiastolicBP")}
            clName="rangeSlider new diastolicBP"
            unit=" mmHG"
          />
          <h3 className="med h3">HDL (mg/dL)</h3>
          <RangeSlider
            {...RangeSliderModul[1]}
            value={form.newHdl}
            onChange={setInput("newHdl")}
            unit=" mg/dL"
            clName="rangeSlider new hdl"
          />
          <h3 className="med h3">Triglycerides (mg/dL)</h3>
          <RangeSlider
            {...RangeSliderModul[2]}
            value={form.newTrigl}
            onChange={setInput("newTrigl")}
            unit=" mg/dL"
            clName="rangeSlider new trigl"
          />
          <h3 className="med h3">Fasting Glucose (mg/dL)</h3>
          <RangeSlider
            {...RangeSliderModul[3]}
            value={form.newGlucose}
            onChange={(event) =>
              handleSugarChangeGlucoseToA1C(event, setInputDirect)
            }
            unit=" mg/dL"
            clName="rangeSlider new glucose"
          />
          <h3 className="med h3">A1C Glycated Hemoglobin </h3>
          <RangeSlider
            {...RangeSliderModul[7]}
            value={form.newA1c}
            onChange={(event) =>
              handleSugarChangeA1CToGlucose(event, setInputDirect)
            }
            unit="%"
            stepAmount="0.1"
            clName="rangeSlider new a1c"
          />
        </div>
        <button
          type="submit"
          className="button primary mirror !w-full !max-w-[375px] border-[1px]"
          onClick={() => saveYourGoals()}
        >
          Save Your Goals
        </button>

        <button
          type="button"
          className="button primary clearDT mirror !w-full !max-w-[375px]"
          style={{
            display: "flex",
            gridGap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setShareGoalsPopup(true)}
        >
          <span>Share Your Goals</span>{" "}
          <img
            className="shareIcon"
            src={process.env.PUBLIC_URL + "/images/share.svg"}
            style={{ top: 0 }}
            alt="share-icon"
          />
        </button>
        <div className="manualGap" style={{ padding: "20px" }}></div>

        <div className="step add">
          <div className="step__image">
            <img
              src={process.env.PUBLIC_URL + "/images/powerme.png"}
              alt="powerme"
            />
          </div>
          <div className="step__content">
            <h2>To Learn More</h2>
            <h3 className="light h3">
              To better understand your health,{" "}
              <a href="https://apps.powerme.health/shop">
                purchase a PowerMe Metabolic Health Kit
              </a>
            </h3>
            <h3 className="light h3">
              To find resources on bettering your health outcomes,{" "}
              <a href="http://powermeacademy.flywheelsites.com/">
                visit the PowerMe Academy
              </a>
            </h3>
          </div>
        </div>

        {shareResultsPopup ? (
          <ResulsToShare
            setShareResultsPopup={setShareResultsPopup}
            form={form}
            metaAge={metaAge}
          />
        ) : null}

        {shareGoalsPopup ? (
          <GoalsToShare form={form} setShareGoalsPopup={setShareGoalsPopup} />
        ) : null}
      </div>
    </>
  );
}

// make a function that will take in A1C value and convert it to glucose then update both corresponding form values
function handleSugarChangeA1CToGlucose(evt, setInputDirect) {
  let sugarNumber = 0;
  if (evt.target.value === 0) {
    sugarNumber = parseInt(evt.target.value);
  } else {
    sugarNumber = parseInt(parseFloat(evt.target.value) * 28.7 - 46.7);
  }
  setInputDirect("newA1c", evt.target.value, "newGlucose", sugarNumber);
}

// make a function that will take in glucose integer value and convert it to a1c percent by then update both corresponding form values
function handleSugarChangeGlucoseToA1C(evt, setInputDirect) {
  let sugarNumber = 0;
  if (evt.target.value === 0) {
    sugarNumber = parseInt(evt.target.value);
  } else {
    sugarNumber = parseFloat((parseInt(evt.target.value) + 46.7) / 28.7);
  }
  setInputDirect(
    "newGlucose",
    evt.target.value,
    "newA1c",
    sugarNumber.toFixed(1)
  );
}

function ResulsToShare({ setShareResultsPopup, form, metaAge }) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 m-7 max-[540px]:m-0">
      <div
        className="fixed top-0 left-0 bottom-0 right-0 -z-[1] flex items-center justify-center bg-black opacity-[0.65]"
        onClick={() => setShareResultsPopup(false)}
      ></div>

      <div className="relative mx-auto h-full max-w-[900px] overflow-auto bg-secondary py-10 px-20 max-[540px]:px-5">
        <div
          className="absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px]"
          onClick={() => setShareResultsPopup(false)}
        >
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8267 12.9723L7.20797 9.35357L3.67244 12.8891L0.989592 10.2063L4.52513 6.67072L0.927201 3.0728L3.46447 0.535534L7.06239 4.13346L10.5979 0.597925L13.2808 3.28077L9.74524 6.8163L13.364 10.435L10.8267 12.9723Z"
              fill="black"
            />
          </svg>
        </div>

        <VitalityScore
          form={form}
          score={0}
          title="Your Vitality Score Is:"
          image="/images/graph.png"
          clName="vitality"
        />

        <div className="relative flex flex-row flex-nowrap  sm:mt-16 sm:border-[1px] sm:border-l-[15px] sm:border-l-primary ">
          <div
            className={`flex w-full grow flex-col-reverse flex-nowrap justify-between py-10 px-6 sm:pl-6 md:flex-row md:pl-20`}
          >
            <div className="flex flex-row justify-between md:flex-col md:gap-10">
              <div className=" md:border-0">
                <h3 className="font-montserrat text-base leading-[39px] text-primary md:text-3xl">
                  Your Metabolic Age{" "}
                </h3>

                <p className="font-montserrat text-[40px] font-bold leading-[110%] text-primary md:text-[80px] md:font-normal md:leading-[98px] ">
                  {metaAge}
                </p>
              </div>

              <div>
                <h3 className="font-montserrat text-base leading-[39px] text-[#7C5D7A] md:text-3xl">
                  Your Calendar Age{" "}
                </h3>
                <p className="font-montserrat text-[40px] font-bold leading-[110%] text-[#7C5D7A] md:text-[80px] md:font-normal md:leading-[98px] ">
                  {form.age}
                </p>
              </div>
            </div>
            <div className="doterraColumn flex items-center">
              <div className="relative mx-auto h-[200px] min-w-[200px] max-w-[300px] grow sm:block">
                <VitalityScoreGraph value1={metaAge} value2={form.age} />

                <div className="absolute right-0 left-0 top-0 bottom-0 flex items-center justify-center">
                  <p className="text-xl font-bold">
                    <span className="text-primary">{metaAge}</span>/
                    <span className="text-third">{form.age}</span>
                  </p>
                </div>
              </div>

              {/*<CircleModel
                  metabolicAge={metaAge}
                  actualAge={form.age}
                />*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GoalsToShare({ form, setShareGoalsPopup }) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 m-7 max-[540px]:m-0 ">
      <div
        className="fixed top-0 left-0 bottom-0 right-0 -z-[1] flex items-center justify-center bg-black opacity-[0.65]"
        onClick={() => setShareGoalsPopup(false)}
      ></div>

      <div className="relative mx-auto flex h-full max-w-[900px] items-center justify-center overflow-auto bg-secondary py-10 px-20 max-[540px]:px-5">
        <div
          className="absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px]"
          onClick={() => setShareGoalsPopup(false)}
        >
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8267 12.9723L7.20797 9.35357L3.67244 12.8891L0.989592 10.2063L4.52513 6.67072L0.927201 3.0728L3.46447 0.535534L7.06239 4.13346L10.5979 0.597925L13.2808 3.28077L9.74524 6.8163L13.364 10.435L10.8267 12.9723Z"
              fill="black"
            />
          </svg>
        </div>
        <VitalityScore
          score={1}
          form={form}
          title="Your Vitality Score Could Be"
          image="/images/graph2.png"
          clName="vitality new"
        />
      </div>
    </div>
  );
}
