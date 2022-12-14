import React, { useState } from "react";
import VitalityStatsBlock from "./VitalityStatsBlock";
import VitalityScoreHistory from "./VitalityScoreHistory";

export default function VitalityHistory() {
  const [deletePopupToggle, setDeletePopupToggle] = useState(false);
  return (
    <div className="container w-full max-w-none md:my-12 sm:my-8 sm:px-6">
      <div className="max-w-[1080px] m-auto">
        <div className="bg-primary sm:bg-transparent py-6">
          <h1 className="font-montserrat font-normal text-3xl sm:text-6xl leading-[64px] text-center text-secondary sm:text-black">
            Vitality History
          </h1>
        </div>
        <div className="md:mt-12 sm:mt-6">
          <VitalityStatsBlock />
          <div>
            <VitalityScoreHistory
              setDeletePopupToggle={() => setDeletePopupToggle(true)}
            />
            <VitalityScoreHistory
              setDeletePopupToggle={() => setDeletePopupToggle(true)}
            />
          </div>
        </div>
      </div>
      {deletePopupToggle ? (
        <DeletePopup close={() => setDeletePopupToggle(false)} />
      ) : null}
    </div>
  );
}

function DeletePopup(props) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-[0.65] flex justify-center items-center"></div>
      <div className="w-full max-w-5xl mx-4 relative bg-secondary py-10 md:py-16 px-10 md:px-20 z-10">
        <div
          className="w-8 h-8 absolute right-4 top-4 md:right-8 md:top-8 flex justify-center items-center border-[1px] rounded-full cursor-pointer"
          onClick={props.close}
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

        <div>
          <div>
            <p className="text-lg md:text-2xl">
              Are you sure you would like to delete this goal?
            </p>
          </div>
          <div className="mt-6">
            <div className="border-[1px] py-5 px-6 md:px-20 border-l-[10px] md:border-l-[15px] border-l-primary">
              <div>
                <span className="font-montserrat font-bold text-xl leading-6 text-black ">
                  November 15, 2022
                </span>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap ">
                <div className="sm:w-1/2 mt-4  sm:border-r-[1px]">
                  <p className="font-montserrat text-base leading-[20px]">
                    Your Metabolic Age
                  </p>
                  <p className="font-montserrat text-4xl leading-[49px] text-primary">
                    43
                  </p>
                </div>

                <div className="sm:w-1/2 mt-4 flex flex-col sm:items-center ">
                  <div>
                    <p className="font-montserrat text-base leading-[20px]">
                      Your Metabolic Age
                    </p>
                    <p className="font-montserrat text-4xl leading-[49px] text-third">
                      50
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-black rounded-3xl py-3 px-6 md:px-12 font-montserrat font-bold text-base md:text-xl leading-[24px] text-center text-secondary mt-10 mr-4 border-[1px]">
                Delete
              </button>

              <button
                className="rounded-3xl py-3 px-6 md:px-12 font-montserrat font-bold text-base md:text-xl leading-[24px] text-center text-black mt-10 border-[1px]"
                onClick={props.close}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
