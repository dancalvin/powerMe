import React from "react";
import { Link } from "react-router-dom";
import main_img from "../../images/main_img.png";
import SplashScreen from "./SplashScreen";

export default function Main() {
  return (
    <>
      <div className="pb-20 xl:pt-[107px] xl:pb-60">
        <div className="max-w-[1080px] m-auto relative">
          <h1 className="bg-[#405F53] mb-8 p-8 font-bold text-[#FAF4ED] text-[28px] leading-[34px] uppercase text-center xl:bg-transparent xl:mb-[100px] xl:font-light xl:text-[60px] xl:leading-[64px] xl:text-black">
            Lifelong Vitality Program
          </h1>

          <div className="relative xl:border xl:border-black">
            <div className="relative h-96 mb-8 xl:mb-0">
              <img
                className="object-cover w-full h-full"
                src={main_img}
                alt="main-img"
              />
              <span className="text-xl xl:text-3xl font-semibold absolute top-1/2 left-1/2 translate-x-[-6%] translate-y-[-260%] xl:translate-x-[59%] xl:translate-y-[-135%]">
                Look, feel, live,
                <br />
                younger, longer
              </span>
            </div>
            <div className="px-8 xl:px-[84px] xl:py-[60px]">
              <p className="text-xl xl:text-3xl">
                <span className="font-semibold">
                  The dōTERRA Lifelong Vitality Program
                </span>{" "}
                makes taking the first step on the path toward a lifetime of
                vitality and wellness convenient and affordable.. The three core
                products are the program are -{" "}
                <span className="font-semibold">
                  Alpha CRS+, xEO Mega, and Microplex VMz
                </span>{" "}
                - are formulated to provide you with targeted levels of
                essential nutrients and powerful metabolic factors for optimal
                health, energy, and longevity.
              </p>
            </div>
          </div>

          <div className="mt-[60px] m-auto space-y-4 flex flex-col items-center xl:mt-[80px]">
            <Link
              to="/getStarted"
              className="flex justify-center w-[280px] px-[50px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300  xl:px-[58px] xl:py-[18px] xl:w-full xl:max-w-[293px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Get Started
            </Link>

            <Link
              to="/discover"
              className="flex justify-center w-[280px] px-[50px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300  xl:px-[58px] xl:py-[18px] xl:w-full xl:max-w-[293px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
