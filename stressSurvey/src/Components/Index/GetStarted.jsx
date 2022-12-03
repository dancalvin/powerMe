import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <>
      <div className="pb-20 xl:pt-[107px] xl:pb-60">
        <div className="max-w-[1080px] m-auto relative">
          <div className="mb-8  xl:mb-[100px]">
            <h1 className="bg-[#405F53] mb-8 p-8 font-bold text-[#FAF4ED] text-[28px] leading-[34px] uppercase text-center xl:mb-4 xl:bg-transparent xl:font-light xl:text-[60px] xl:leading-[64px] xl:text-black">
              Getting Started
            </h1>
            <p className="text-xl mb-8 px-8 xl:text-3xl">
              <span className="font-semibold">First</span> you need to take a
              Head-To-Toe Inventory to assess your current level of wellness.
            </p>
            <p className="text-xl  px-8 xl:text-3xl">
              Take a moment to think about how you have been feeling in the
              following categories?
            </p>
          </div>

          <div className="relative xl:border xl:border-black">
            <div className="after:content-[''] after:bg-[url('./images/human_body_img.png')] after:w-full after:h-full after:absolute after:top-0 after:right-0 after:bg-no-repeat after:bg-[center_right] after:bg-[length:50%_100%] xl:after:right-6 xl:after:bg-contain">
              <div className="px-8 py-8 bg-[#E7ECFF] xl:px-[84px] xl:py-[60px]">
                <p className="text-xl w-1/2 relative z-10 xl:text-3xl">
                  <span className="font-semibold">Energy</span> - How is your
                  overall energy level? Do you feel like you have all the energy
                  you need?
                </p>
              </div>

              <div className="px-8 py-8 bg-[#E5FEE5] xl:px-[84px] xl:py-[60px]">
                <p className="text-xl w-1/2 relative z-10  xl:text-3xl">
                  <span className="font-semibold">Stress</span> - What is your
                  stress level like? Do you carry more stress than you need to?
                </p>
              </div>

              <div className="px-8 py-8 bg-[#FFF5E7] xl:px-[84px] xl:py-[60px]">
                <p className="text-xl w-1/2 relative z-10 xl:text-3xl">
                  <span className="font-semibold">Exercise</span> - Are you
                  active? Do you get out and exercise enough?
                </p>
              </div>

              <div className="px-8 py-8 bg-[#FFE9E5] xl:px-[84px] xl:py-[60px]">
                <p className="text-xl w-1/2 relative z-10 xl:text-3xl">
                  <span className="font-semibold">Rest</span> - How are you
                  sleeping? Do you feel rested when you wake up every day?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[60px] m-auto space-y-4 flex flex-col items-center xl:mt-[80px]">
            <Link
              to="/energyLevel"
              className="flex justify-center w-[280px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300  xl:py-[18px] xl:w-full xl:max-w-[293px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Start Your Inventory
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
