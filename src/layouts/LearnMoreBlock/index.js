import React from "react";
import { P, P2, H2 } from "../../components/Typography";

import { StepWrapper } from "../Steps";
import Book from "../../assets/images/powerme.png";

export default function LearnMoreBlock(props) {
  return (
    <div>
      <StepWrapper no={2}>
        <div className="row-nowrap flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div className="max-w-none m-0 mb-7 flex w-full items-center justify-center sm:mb-0 sm:mr-[30px] sm:w-1/5 sm:max-w-[125px] md:mr-[100px]">
            <img src={Book} alt="powerme" className="" />
          </div>
          <div className="w-[calc(80% - 100px)] max-w-[293px] sm:max-w-[325px] md:max-w-[525px]">
            <H2>To Learn More</H2>
            <P2>
              To better understand your health,
              <br />
              <a
                href="https://apps.powerme.health/shop"
                className="text-s2 underline "
              >
                purchase a PowerMe Metabolic Health Kit
              </a>
            </P2>
            <P2>
              To find resources on bettering your health outcomes,
              <br />
              <a
                href="http://powermeacademy.flywheelsites.com/"
                className="text-s2 underline "
              >
                visit the PowerMe Academy
              </a>
            </P2>
          </div>
        </div>
      </StepWrapper>
    </div>
  );
}
