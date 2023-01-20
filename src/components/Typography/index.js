import React from "react";
import { STEPS_COLORS } from "../../constants/colors";
export function H1({ children, no = 0 }) {
  return no >= 0 ? (
    <>
      <h1
        className={`-mx-8 mt-0 mb-0 block py-[17px] px-10 font-sans text-[28px] font-bold capitalize leading-[34px] text-secondary sm:mb-8 sm:hidden sm:bg-transparent sm:py-0 sm:px-0 sm:text-[34px] sm:font-light sm:uppercase sm:leading-[46px] sm:text-black md:mb-10 lg:mx-0 lg:mb-[60px] lg:text-[44px] lg:leading-[52px] xl:text-[50px] xl:leading-[58px] 2xl:-mx-5 2xl:mb-[100px] 2xl:text-[60px] 2xl:leading-[64px]`}
        style={{
          backgroundColor: STEPS_COLORS[parseInt(no)],
        }}
      >
        {children}
      </h1>

      <h1
        className={`-mx-8 mt-0 mb-0 hidden bg-transparent py-[17px] px-10 font-sans text-[28px] font-bold capitalize leading-[34px]
text-black sm:mb-8 sm:block sm:bg-transparent sm:py-0 sm:px-0 sm:text-[34px] sm:font-light sm:uppercase sm:leading-[46px] sm:text-black md:mb-10 lg:mx-0 lg:mb-[60px] lg:text-[44px] lg:leading-[52px] xl:text-[50px] xl:leading-[58px] 2xl:-mx-5 2xl:mb-[100px] 2xl:text-[60px] 2xl:leading-[64px]`}
      >
        {children}
      </h1>
    </>
  ) : (
    <h1
      className={`-mx-8 mt-0 mb-0 hidden bg-transparent py-[17px] px-10 font-sans text-[28px] font-bold capitalize leading-[34px]
      text-black sm:mb-8 sm:block sm:bg-transparent sm:py-0 sm:px-0 sm:text-[34px] sm:font-light sm:uppercase sm:leading-[46px] sm:text-black md:mb-10 lg:mx-0 lg:mb-[60px] lg:text-[44px] lg:leading-[52px] xl:text-[50px] xl:leading-[58px] 2xl:-mx-5 2xl:mb-[100px] 2xl:text-[60px] 2xl:leading-[64px]`}
    >
      {children}
    </h1>
  );
}

export function H2(props) {
  return (
    <h2 className="mb-4 font-sans text-xl font-bold leading-6 text-black sm:mb-6 sm:text-[22px] sm:font-normal sm:leading-[26px] lg:text-[24px] lg:leading-[30px] xl:text-[26px] xl:leading-[32px]">
      {props.children}
    </h2>
  );
}

export function H3(props) {
  return (
    <h3 className={`mb-4 font-sans text-xl leading-6 text-black`}>
      {props.children}
    </h3>
  );
}

export function H4(props) {
  return <h4>{props.children}</h4>;
}

export function H5(props) {
  return <h5>{props.children}</h5>;
}

export function P(props) {
  return (
    <p className="font-sans text-base leading-5 text-black sm:text-xl sm:leading-6">
      {props.children}
    </p>
  );
}

export function P2(props) {
  return (
    <p className="mb-4 font-sans text-base font-normal leading-5 text-black sm:mb-7 sm:text-xl sm:font-light sm:leading-6 md:mb-6 lg:mb-10 ">
      {props.children}
    </p>
  );
}
