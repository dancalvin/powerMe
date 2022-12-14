import React, { useState, useEffect } from "react";
import sub from "date-fns/sub";
import compareDesc from "date-fns/compareDesc";

import VitalityHistoryGraph from "./VitalityHistoryGraph";
import EditVitalityCalculator from "../EditVitalityCalculator";

import { getVitalityScore, getMetaAge } from "../../utils";
const timeRanges = ["day", "week", "month", "year"];

/*
const vitalityGoalsData = [
  {
    name: "Visit 1",
    scoreGoals: 0,
    ageGoals: 59,
  },
  {
    name: "Visit 2",
    scoreGoals: 1,
    ageGoals: 56,
  },
  {
    name: "Visit 3",
    scoreGoals: 2,
    ageGoals: 56,
  },

  {
    name: "Visit 4",
    scoreGoals: 2,
    ageGoals: 56,
  },
  {
    name: "Visit 5",
    scoreGoals: 2,
    ageGoals: 59,
  },
  {
    name: "Visit 6",
    scoreGoals: 2,
    ageGoals: 30,
  },
  {
    name: "Visit 7",
    scoreGoals: 0,
    ageGoals: 59,
  },
  {
    name: "Visit 8",
    scoreGoals: 2,
    ageGoals: 59,
  },
  {
    name: "Visit 9",
    scoreGoals: 2,
    ageGoals: 59,
  },
];
*/

export default function VitalityStatsBlock(props) {
  const [vitalityProgressData, setVitalityProgressData] = useState([]);
  const [vitalityGoalsData, setvitalityGoalsData] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);
  const [tab, setTab] = useState("progress");
  const [historicalDataPopup, setHistoricalDataPopup] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);

  useEffect(() => {
    selectDateRangeFunc();
  }, [props]);

  const selectDateRangeFunc = (selectedRange = "month") => {
    setSelectedTimeRange(selectedRange);
    let today,
      startDate,
      dateRangeArr = [],
      vitalityScores = [],
      vitalityMetaGoals = [];

    today = new Date();
    if (selectedRange == "year") {
      startDate = sub(today, {
        years: 1,
      });
    } else if (selectedRange == "month") {
      startDate = sub(today, {
        months: 1,
      });
    } else if (selectedRange == "week") {
      startDate = sub(today, {
        weeks: 1,
      });
    } else {
      startDate = sub(today, {
        days: 1,
      });
    }

    dateRangeArr = [startDate, today];

    if (selectedTimeRange && props.historyData) {
      const copyHistoryData = [].concat(props.historyData);
      const filteredHistoryData = copyHistoryData.filter((data, index) =>
        compareDesc(new Date(dateRangeArr[0]), new Date(data.timeStamp)) == 1 &&
        compareDesc(new Date(data.timeStamp), new Date(dateRangeArr[1])) == 1
          ? true
          : false
      );

      if (filteredHistoryData) {
        //const vScore = getVitalityScore({ ...props.form, ["score"]: 0 });
        //const metaAgeData = getMetaAge({ ...props.form });
        //setScoreStyle(vScore);
        //setMetabolicAge(metaAgeData);

        if (tab == "progress") {
          filteredHistoryData
            .slice(0)
            .reverse()
            .filter((data, index) => {
              vitalityScores.push({
                name: `Visit ${index}`,
                score: getVitalityScore({ ...data.form, score: 0 }),
              });
            });

          if (vitalityScores) {
            setVitalityProgressData(vitalityScores);
          }
        } else if (tab == "goals") {
          filteredHistoryData
            .slice(0)
            .reverse()
            .filter((data, index) => {
              vitalityMetaGoals.push({
                name: `Visit ${index}`,
                scoreGoals: getVitalityScore({ ...data.form, score: 0 }),
                ageGoals: getMetaAge({ ...data.form }),
              });
            });

          if (vitalityMetaGoals) {
            setvitalityGoalsData(vitalityMetaGoals);
          }
        }
      }
    }
  };

  return (
    <div className="bg-secondary sm:border-[1px]">
      <div>
        <div className="flex w-full max-w-none flex-row flex-nowrap">
          <div
            className={`flex w-1/2 cursor-pointer flex-row flex-nowrap justify-center py-4 sm:border-b-[1px] ${
              tab == "progress"
                ? "border-b-8 border-b-primary sm:bg-primary"
                : ""
            }`}
            onClick={() => setTab("progress")}
          >
            <p
              className={`text-center font-montserrat text-xs leading-5 sm:text-xl ${
                tab == "progress" ? "font-bold sm:text-secondary" : "text-black"
              }`}
            >
              Vitality Progress
            </p>
          </div>
          <div
            className={`flex w-1/2 cursor-pointer flex-row flex-nowrap justify-center py-4 sm:border-l-[1px] sm:border-b-[1px] ${
              tab == "goals" ? "border-b-8 border-b-primary sm:bg-primary" : ""
            }`}
            onClick={() => setTab("goals")}
          >
            <p
              className={`text-center font-montserrat text-xs leading-5 sm:text-xl   ${
                tab == "goals" ? "font-bold sm:text-secondary" : "text-black"
              }`}
            >
              Vitality Goals
            </p>
          </div>
        </div>
        <div className="px-6 py-8 sm:px-12 sm:py-10">
          <div className="flex flex-row flex-nowrap justify-between gap-2 sm:gap-5">
            {timeRanges.map((tRange, index) => (
              <div
                key={index}
                className={`px:3 ms:px-8 grow cursor-pointer rounded-full border-[1px] py-2 text-center text-xs uppercase md:text-base ${
                  tRange == selectedTimeRange
                    ? "bg-black text-secondary"
                    : "bg-secondary"
                }`}
                onClick={() => selectDateRangeFunc(tRange)}
              >
                <span>{tRange}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex h-16 cursor-pointer flex-row flex-nowrap items-center justify-between sm:mt-9">
            <div className="w-[12px] sm:w-[22px]">
              <svg
                width="100%"
                height="42"
                viewBox="0 0 22 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 1.31011L1.00003 21.3L21 41.3101"
                  stroke="black"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
            <div className="cursor-pointer font-montserrat text-base font-bold text-black">
              April 1–30, 2022
            </div>
            <div className="w-[12px] sm:w-[22px]">
              <svg
                width="100%"
                height="42"
                viewBox="0 0 22 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 41.31L21 21.3202L1 1.31006"
                  stroke="black"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
          </div>
          <div className="mt-5">
            {tab == "progress" ? (
              <div className="flex flex-row gap-4">
                <div>
                  <svg
                    width="80"
                    height="21"
                    viewBox="0 0 80 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="9.31006"
                      x2="80"
                      y2="9.31006"
                      stroke="#6D7B9B"
                      stroke-width="2"
                    />
                    <circle cx="40" cy="10.3101" r="10" fill="#6D7B9B" />
                  </svg>
                </div>
                <div>
                  <p className="font-montserrat text-base leading-5 text-primary">
                    MetaPWR Metabolic Blend
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <div>
                  <svg
                    width="80"
                    height="21"
                    viewBox="0 0 80 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="9.31006"
                      x2="80"
                      y2="9.31006"
                      stroke="#6D7B9B"
                      stroke-width="2"
                    />
                    <circle cx="40" cy="10.3101" r="10" fill="#6D7B9B" />
                  </svg>
                </div>
                <div>
                  <p className="font-montserrat text-base leading-5 text-primary">
                    Vitality Score Goals
                  </p>
                </div>

                <div>
                  <svg
                    width="80"
                    height="21"
                    viewBox="0 0 80 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="9.31006"
                      x2="80"
                      y2="9.31006"
                      stroke="#F7A08C"
                      stroke-width="2"
                    />
                    <circle cx="40" cy="10.3101" r="10" fill="#F7A08C" />
                  </svg>
                </div>
                <div>
                  <p className="font-montserrat text-base leading-5 text-primary">
                    Metabolic Age Goals
                  </p>
                </div>
              </div>
            )}

            <div className="mt-10">
              <div>
                {tab == "progress" ? (
                  <VitalityHistoryGraph
                    lineData={vitalityProgressData}
                    line1Color="#7D9D92"
                    line1DataKey="score"
                    YLable={"# OF DROPS"}
                  />
                ) : (
                  <VitalityHistoryGraph
                    lineData={vitalityGoalsData}
                    line1Color="#7D9D92"
                    line2Color="#F7A08C"
                    line1DataKey="scoreGoals"
                    line2DataKey="ageGoals"
                    YLable={"GOAL"}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 text-center font-montserrat text-xl leading-6 text-black underline">
            <p
              className="cursor-pointer"
              onClick={() => setHistoricalDataPopup(true)}
            >
              Add historical data
            </p>
          </div>
        </div>
      </div>

      {historicalDataPopup ? (
        <EditVitalityCalculator close={() => setHistoricalDataPopup(false)} />
      ) : null}
    </div>
  );
}
