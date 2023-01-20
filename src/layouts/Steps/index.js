import React from "react";
import { STEPS_COLORS } from "../../constants/colors";

export function StepWrapper({ children, no = 0, disabled = false }) {
  if (no == 0) {
    return (
      <div
        className={`${
          disabled
            ? ""
            : `relative border-0 border-solid border-black p-0 before:absolute before:top-0 before:left-0 before:h-full before:w-[20px] before:bg-s1 before:content-none sm:border-[1px] sm:py-[30px] sm:pr-[40px] sm:pl-[50px] sm:before:content-[""] md:py-[40px] md:pr-[60px] md:pl-[70px] lg:py-[60px] lg:pl-[96px] lg:pr-[84px]`
        }`}
      >
        {children}
      </div>
    );
  } else if (no == 1) {
    return (
      <div
        className={`${
          disabled
            ? ""
            : `relative border-0 border-solid border-black p-0 before:absolute before:top-0 before:left-0 before:h-full before:w-[20px] before:bg-s2 before:content-none sm:border-[1px] sm:py-[30px] sm:pr-[40px] sm:pl-[50px] sm:before:content-[""] md:py-[40px] md:pr-[60px] md:pl-[70px] lg:py-[60px] lg:pl-[96px] lg:pr-[84px]`
        }`}
      >
        {children}
      </div>
    );
  } else if (no == 2) {
    return (
      <div
        className={`${
          disabled
            ? ""
            : `relative border-0 border-solid border-black p-0 before:absolute before:top-0 before:left-0 before:h-full before:w-[20px] before:bg-s3 before:content-none sm:border-[1px] sm:py-[30px] sm:pr-[40px] sm:pl-[50px] sm:before:content-[""] md:py-[40px] md:pr-[60px] md:pl-[70px] lg:py-[60px] lg:pl-[96px] lg:pr-[84px]`
        }`}
      >
        {children}
      </div>
    );
  } else if (no == 3) {
    return (
      <div
        className={`${
          disabled
            ? ""
            : `relative border-0 border-solid border-black p-0 before:absolute before:top-0 before:left-0 before:h-full before:w-[20px] before:bg-s4 before:content-none sm:border-[1px] sm:py-[30px] sm:pr-[40px] sm:pl-[50px] sm:before:content-[""] md:py-[40px] md:pr-[60px] md:pl-[70px] lg:py-[60px] lg:pl-[96px] lg:pr-[84px]`
        }`}
      >
        {children}
      </div>
    );
  } else if (no == 4) {
    return (
      <div
        className={`${
          disabled
            ? ""
            : `relative border-0 border-solid border-black p-0 before:absolute before:top-0 before:left-0 before:h-full before:w-[20px] before:bg-s5 before:content-none sm:border-[1px] sm:py-[30px] sm:pr-[40px] sm:pl-[50px] sm:before:content-[""] md:py-[40px] md:pr-[60px] md:pl-[70px] lg:py-[60px] lg:pl-[96px] lg:pr-[84px]`
        }`}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        className={`${
          disabled
            ? ""
            : `before:bg-s6 relative border-0 border-solid border-black p-0 before:absolute before:top-0 before:left-0 before:h-full  before:w-[20px] before:bg-transparent before:content-none sm:border-[1px] sm:py-[30px] sm:pr-[40px] sm:pl-[50px] sm:before:content-[""] md:py-[40px] md:pr-[60px] md:pl-[70px] lg:py-[60px] lg:pl-[96px] lg:pr-[84px]`
        }`}
      >
        {children}
      </div>
    );
  }
}
