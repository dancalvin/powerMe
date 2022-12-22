import React, { useState } from "react";
import HeartFitHistoryGraph from "./HeartFitHistoryGraph";

const timeRanges = ["day", "week", "month", "year"];
const heartFitProgressData = [
  {
    name: "Page 1",
    score: 60,
  },
  {
    name: "Visit 2",
    score: 65,
  },
  {
    name: "Visit 3",
    score: 62,
  },
  {
    name: "Visit 4",
    score: 61,
  },
  {
    name: "Visit 5",
    score: 65,
  },
  {
    name: "Visit 6",
    score: 68,
  },
  {
    name: "Visit 7",
    score: 72,
  },

  {
    name: "Visit 8",
    score: 73,
  },
  {
    name: "Visit 9",
    score: 75,
  },
];

const heartFitGoalsData = [
  {
    name: "Visit 1",
    scoreGoals: 61,
  },
  {
    name: "Visit 2",
    scoreGoals: 62,
  },
  {
    name: "Visit 3",
    scoreGoals: 64,
  },

  {
    name: "Visit 4",
    scoreGoals: 66,
  },
  {
    name: "Visit 5",
    scoreGoals: 68,
  },
  {
    name: "Visit 6",
    scoreGoals: 70,
  },
  {
    name: "Visit 7",
    scoreGoals: 72,
  },
  {
    name: "Visit 8",
    scoreGoals: 74,
  },
  {
    name: "Visit 9",
    scoreGoals: 76,
  },
];

export default function HeartFitStatsBlock(props) {
  const [selectedTimeRange, setSelectedTimeRange] = useState("month");

  return (
    <div className="sm:border-[1px] bg-secondary">
      <div>
        <div className="history__tabs w-full max-w-none flex flex-row flex-nowrap">
          <div
            className={`history__tab w-1/2 flex flex-row flex-nowrap justify-center py-4 sm:border-b-[1px] cursor-pointer ${
              props.tab == "progress"
                ? "border-b-8 border-b-primary sm:bg-primary"
                : ""
            }`}
            onClick={() => props.setTab("progress")}
          >
            <p
              className={`font-montserrat text-xs sm:text-xl leading-5 text-center ${
                props.tab == "progress"
                  ? "sm:text-secondary font-bold"
                  : "text-black"
              }`}
            >
              <span className="init">Progress</span>
              <span className="final">Heart-Fit Progress</span>
            </p>
          </div>
          <div
            className={`history__tab w-1/2 flex flex-row flex-nowrap justify-center py-4 sm:border-l-[1px] sm:border-b-[1px] cursor-pointer ${
              props.tab == "goals"
                ? "border-b-8 border-b-primary sm:bg-primary"
                : ""
            }`}
            onClick={() => props.setTab("goals")}
          >
            <p
              className={`font-montserrat text-xs sm:text-xl leading-5 text-center   ${
                props.tab == "goals"
                  ? "sm:text-secondary font-bold"
                  : "text-black"
              }`}
            >
              <span className="init">Goals</span>
              <span className="final">Heart-Fit Goals</span>
            </p>
          </div>
        </div>
        <div className="px-6 py-8 sm:px-12 sm:py-10">
          <div className="flex flex-row flex-nowrap justify-between gap-2 sm:gap-5">
            {timeRanges.map((tRange, index) => (
              <div
                key={index}
                className={`py-2 px:3 ms:px-8 border-[1px] rounded-full uppercase cursor-pointer grow text-center text-xs md:text-base ${
                  tRange == selectedTimeRange
                    ? "bg-black text-secondary"
                    : "bg-secondary"
                }`}
                onClick={() => setSelectedTimeRange(tRange)}
              >
                <span>{tRange}</span>
              </div>
            ))}
          </div>
          <div className="h-16 flex flex-row flex-nowrap justify-between items-center mt-6 sm:mt-9 cursor-pointer">
            <div className="w-[12px] sm:w-[22px]">
              <svg width="100%" height="42" viewBox="0 0 22 42" fill="none">
                <path
                  d="M21 1.31011L1.00003 21.3L21 41.3101"
                  stroke="black"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <div className="font-montserrat font-bold text-base text-black cursor-pointer">
              April 1–30, 2022
            </div>
            <div className="w-[12px] sm:w-[22px]">
              <svg width="100%" height="42" viewBox="0 0 22 42" fill="none">
                <path
                  d="M1 41.31L21 21.3202L1 1.31006"
                  stroke="black"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </div>
          <div className="mt-5">
            {props.tab == "progress" ? (
              <div className="flex flex-row gap-4">
                <div>
                  <svg width="80" height="21" viewBox="0 0 80 21" fill="none">
                    <line
                      y1="9.31006"
                      x2="80"
                      y2="9.31006"
                      stroke="#6D7B9B"
                      strokeWidth="2"
                    />
                    <circle cx="40" cy="10.3101" r="10" fill="#6D7B9B" />
                  </svg>
                </div>
                <div>
                  <p className="font-montserrat text-base leading-5 text-primary">
                    Heart-Fit score
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <div>
                  <svg width="80" height="21" viewBox="0 0 80 21" fill="none">
                    <line
                      y1="9.31006"
                      x2="80"
                      y2="9.31006"
                      stroke="#6D7B9B"
                      strokeWidth="2"
                    />
                    <circle cx="40" cy="10.3101" r="10" fill="#7D9D92" />
                  </svg>
                </div>
                <div>
                  <p className="font-montserrat text-base leading-5 text-primary">
                    Heart-Fit Score Goals
                  </p>
                </div>
              </div>
            )}

            <div className="mt-10">
              <div>
                {props.tab == "progress" ? (
                  <HeartFitHistoryGraph
                    lineData={heartFitProgressData}
                    line1Color="#6D7B9B"
                    line1DataKey="score"
                    YLable={"Score"}
                  />
                ) : (
                  <HeartFitHistoryGraph
                    lineData={heartFitGoalsData}
                    line1Color="#7D9D92"
                    line1DataKey="scoreGoals"
                    YLable={"GOAL"}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 text-center font-montserrat text-xl leading-6 underline text-black">
            <p
              className="cursor-pointer"
              onClick={() => {
                props.setAddDataPopupToggle(true);
              }}
            >
              Add historical data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
