import React from "react";
import { Link } from "react-router-dom";
import bottles_3 from "../../images/bottles_3.png";

export default function AllSet() {
  return (
    <>
      <div className="pb-20 xl:pt-[107px] xl:pb-60">
        <div className="max-w-[1080px] m-auto relative">
          <h1 className="bg-[#405F53] mb-8 p-8 font-bold text-[#FAF4ED] text-[28px] leading-[34px] uppercase text-center xl:bg-transparent xl:mb-[100px] xl:font-light xl:text-[60px] xl:leading-[64px] xl:text-black">
            You’re All Set!
          </h1>

          <div className="relative xl:border xl:border-black">
            <div className="px-8 xl:px-[84px] xl:py-[60px]">
              <div className="space-y-8">
                <p className="text-xl xl:text-3xl">
                  <span className="font-semibold">Congratulations</span> on
                  making the first step towards a Total Wellness Lifestyle!
                </p>

                <p className="text-xl xl:text-3xl">
                  Remember that your goal is to improve you life and take part
                  in the lifelong wellness benefits of:
                </p>

                <ul className="list-disc pl-6 space-y-8">
                  <li className="text-xl xl:text-3xl">
                    General wellness and vitality
                  </li>

                  <li className="text-xl xl:text-3xl">
                    Antioxidant and DNA protection
                  </li>

                  <li className="text-xl xl:text-3xl">Energy metabolism</li>

                  <li className="text-xl xl:text-3xl">Bone health</li>

                  <li className="text-xl xl:text-3xl">Immune function</li>

                  <li className="text-xl xl:text-3xl">Stress management</li>

                  <li className="text-xl xl:text-3xl">Cardiovascular health</li>

                  <li className="text-xl xl:text-3xl">
                    Healthy hair, skin, and nails
                  </li>

                  <li className="text-xl xl:text-3xl">
                    Eye, brain, nervous system
                  </li>

                  <li className="text-xl xl:text-3xl">
                    Liver functions and digestive health
                  </li>

                  <li className="text-xl xl:text-3xl">
                    Lung and respiratory health
                  </li>

                  <li className="text-xl xl:text-3xl">Gentle on stomach</li>

                  <li className="text-xl xl:text-3xl">
                    Does not contain genetically modified material: dairy free
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-20">
                  <p className="text-xl underline xl:w-[44%] xl:text-3xl">
                    Be sure to check back in 30 days to record how you are
                    feeling.
                  </p>
                  <img className="w-[44%]" src={bottles_3} alt="bottles-3" />
                </div>
            </div>
          </div>

          <div className="mt-[60px] m-auto space-y-4 flex flex-col items-center xl:mt-[80px]">
            <Link
              to="/results"
              className="flex justify-center w-[310px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300 xl:py-[18px] xl:w-full xl:max-w-[326px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Check Your Results
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
