import React from "react";
import { STEPS_COLORS } from "../../constants/colors";
const optionsArr = [
  {
    id: 1,
    name: "Intro",
  },
  {
    id: 2,
    name: "Tell Us About Yourself",
  },
  {
    id: 3,
    name: "Test Yourself",
  },
  {
    id: 4,
    name: "Results",
  },
  {
    id: 5,
    name: "Goal",
  },
];

export default function StepsNumbersList({ currentIndex }) {
  return (
    <div
      className={`relative mt-8 mb-8 flex justify-between pt-0 before:absolute before:top-[18px] before:left-0 before:h-[1px] before:w-[100%] before:bg-black before:content-[""] sm:mt-0 sm:before:top-[30px] md:mb-[40px] lg:mb-[60px] lg:pt-[80px] 2xl:mb-[80px]`}
    >
      {optionsArr
        ? optionsArr.map((stepObj, index) => (
            <StepNumber
              counter={index}
              key={index}
              {...stepObj}
              selected={index == currentIndex ? true : false}
            />
          ))
        : null}
    </div>
  );
}

function StepNumber({ id, name, selected, counter }) {
  return (
    <div className="relative">
      <div
        className={`static -top-[80px] left-1/2 box-border flex h-[36px] w-[36px] transform-none items-center justify-center rounded-full border-2 border-solid text-base leading-5 sm:h-[60px] sm:w-[60px]  lg:absolute lg:-translate-x-1/2 ${
          selected ? "text-secondary" : "text-black"
        } ${selected ? "" : "bg-secondary"}`}
        style={{
          borderColor: STEPS_COLORS[counter],
          backgroundColor: selected ? STEPS_COLORS[counter] : "",
        }}
      >
        <span className="text-inherit font-sans text-base font-bold sm:text-xl">
          {id}
        </span>
      </div>
      <div
        className={`align-center absolute left-[-150px] hidden w-[300px] text-center font-sans text-xl leading-6 text-black lg:block`}
      >
        <span>{name}</span>
      </div>
    </div>
  );
}
