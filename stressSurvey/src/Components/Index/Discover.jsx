import React from "react";
import { Link } from "react-router-dom";
import discover_bottle_1 from "../../images/discover_bottle_1.png";
import discover_bottle_2 from "../../images/discover_bottle_2.png";
import discover_bottle_3 from "../../images/discover_bottle_3.png";

export default function Discover() {
  return (
    <>
      <div className="pb-20 xl:pt-[107px] xl:pb-60">
        <div className="max-w-[1080px] m-auto relative">
          <div className="mb-8  xl:mb-[100px]">
            <h1 className="bg-[#405F53] mb-8 p-8 font-bold text-[#FAF4ED] text-[28px] leading-[34px] uppercase text-center xl:mb-4 xl:bg-transparent xl:font-light xl:text-[60px] xl:leading-[64px] xl:text-black">
              Discover More
            </h1>
            <p className="text-xl text-center px-8 xl:px-[84px] xl:text-3xl">
              Find out more about the three core products of the Lifelong
              Vitality Program
            </p>
          </div>

          <div className="relative xl:border xl:border-black">
            <div className="px-8 space-y-16 xl:px-[84px] xl:py-[60px] xl:space-y-0">
              <div className="flex items-center">
                <div className="w-1/3 xl:w-1/4">
                  <img
                    className="relative left-[-21.5%]"
                    src={discover_bottle_1}
                    alt="discover-bottle"
                  />
                </div>

                <p className="w-2/3 xl:w-3/4 text-sm xl:text-3xl">
                  <span className="font-semibold">
                    Alpha CRS+ Cellular Vitality Complex
                  </span>{" "}
                  contains powerful polyphenols that protect cells from free
                  radicals that can damage cellular DNA, mitochondria, and other
                  critical cell structures.*
                </p>
              </div>

              <div className="flex items-center flex-row-reverse">
                <div className="w-1/3 xl:w-1/4">
                  <img
                    className="relative w-[79%] right-[-29.5%]"
                    src={discover_bottle_2}
                    alt="discover-bottle"
                  />
                </div>

                <p className="w-2/3 xl:w-3/4 text-sm xl:text-3xl">
                  <span className="font-semibold">
                    xEO Mega Essential Oil Omega Complex
                  </span>{" "}
                  provides ultra-pure essential fatty acids and other fat
                  soluble nutrients that help support heart and circulatory
                  health, brain health, and optimal immune function among many
                  other systemic benefits.*
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-1/3 xl:w-1/4">
                  <img
                    className="relative left-[-21.5%]"
                    src={discover_bottle_3}
                    alt="discover-bottle"
                  />
                </div>

                <p className="w-2/3 xl:w-3/4 text-sm xl:text-3xl">
                  <span className="font-semibold">Microplex VMz Food Nutrient Complex</span> is a balanced formula of
                  essential vitamins and bioavailable minerals carefully
                  formulated to provide optimal levels of key micronutrients
                  that support energy and immune functions.*
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[60px] m-auto space-y-4 flex flex-col items-center xl:mt-[80px]">
          <Link
              to="/getStarted"
              className="flex justify-center w-[280px] px-[50px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300  xl:px-[58px] xl:py-[18px] xl:w-full xl:max-w-[293px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
