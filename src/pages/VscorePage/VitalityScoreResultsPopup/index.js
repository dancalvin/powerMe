import React from "react";

import VitalityScoreGraph from "../VitalityHistory/VitalityScoreGraph";
import VitalityScore from "../VitalityScore";
import { StepWrapper } from "../../../layouts/Steps";
import Graph from "../../../assets/images/graph.png";

export default function VitalityScoreResultsPopup({ close, form, metaAge }) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 m-7 max-[540px]:m-0">
      <div
        className="fixed top-0 left-0 bottom-0 right-0 -z-[1] flex items-center justify-center bg-black opacity-[0.65]"
        onClick={close}
      ></div>

      <div className="relative mx-auto h-full max-w-[900px] overflow-auto bg-secondary py-5 px-5 md:py-10 md:px-20">
        <div
          className="absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px]"
          onClick={close}
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
          image={Graph}
          clName="vitality"
        />

        <div className="mt-16">
          <StepWrapper no={5}>
            <div
              className={`flex w-full grow flex-col-reverse flex-nowrap justify-between gap-7 lg:flex-row lg:gap-0`}
            >
              <div className="flex flex-row justify-between md:gap-10 lg:flex-col">
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
              <div className="flex items-center">
                <div className="relative mx-auto min-h-[200px] min-w-[200px] grow sm:min-h-[300px] sm:min-w-[300px] ">
                  <VitalityScoreGraph value1={metaAge} value2={form.age} />

                  <div className="absolute right-0 left-0 top-0 bottom-0 flex items-center justify-center">
                    <p className="text-xl font-bold">
                      <span className="text-primary">{metaAge}</span>/
                      <span className="text-third">{form.age}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StepWrapper>
        </div>
      </div>
    </div>
  );
}
