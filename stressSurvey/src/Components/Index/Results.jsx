import React from "react";
import { Link } from "react-router-dom";
import line_graph from "../../images/line_graph.png";

export default function Results() {
  return (
    <>
      <div className="pb-20 xl:pt-[107px] xl:pb-60">
        <div className="max-w-[1080px] m-auto relative">
          <h1 className="bg-[#405F53] mb-8 p-8 font-bold text-[#FAF4ED] text-[28px] leading-[34px] uppercase text-center xl:bg-transparent xl:mb-[100px] xl:font-light xl:text-[60px] xl:leading-[64px] xl:text-black">
            Your Results
          </h1>

          <div className="relative xl:border xl:border-black">
            <div className="px-8 xl:px-[84px] xl:py-[60px]">
              <div className="space-y-8">
                <p className="text-xl xl:text-3xl">
                  dōTERRA dietary supplements are an important part of a
                  wellness lifestyle estate will help you look, feel, and live
                  younger, longer.* They are an excellent complement to dōTERRA
                  CPTG essential oils and other wellness lifestyle products.
                </p>

                <p className="text-xl xl:text-3xl">
                  You have been taking your supplements now for 120 days! Look
                  at how you are now feeling compared to when you started.
                </p>
              </div>

              <div className="my-24">
                <img className="w-full" src={line_graph} alt="line-graph" />
              </div>

              <p className="text-xl xl:text-3xl">
                Don’t be shy! Show your friends how great you are feeling!
              </p>
            </div>
          </div>

          <div className="mt-[60px] m-auto space-y-4 flex flex-col items-center xl:mt-[80px]">
            <Link
              to="/getStarted"
              className="flex justify-center w-[310px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300 xl:py-[18px] xl:w-full xl:max-w-[326px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Share Your Results
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
