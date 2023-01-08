import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import sub from "date-fns/sub";
import add from "date-fns/add";
import compareDesc from "date-fns/compareDesc";
import { toast } from "react-toastify";

import VitalityHistoryGraph from "./VitalityHistoryGraph";
import EditVitalityCalculator from "../EditVitalityCalculator";

import { getVitalityScore, getMetaAge } from "../../utils";

const timeRanges = ["day", "week", "month", "year"];

/*
const vitalityGoalsData = [
  {
    name: "Visit 1",
    scoreGoals: 61,
    ageGoals: 50,
  },
  {
    name: "Visit 2",
    scoreGoals: 62,
    ageGoals: 49,
  },
  {
    name: "Visit 3",
    scoreGoals: 64,
    ageGoals: 49,
  },

  {
    name: "Visit 4",
    scoreGoals: 66,
    ageGoals: 48,
  },
  {
    name: "Visit 5",
    scoreGoals: 68,
    ageGoals: 47,
  },
  {
    name: "Visit 6",
    scoreGoals: 70,
    ageGoals: 46,
  },
  {
    name: "Visit 7",
    scoreGoals: 72,
    ageGoals: 45,
  },
  {
    name: "Visit 8",
    scoreGoals: 74,
    ageGoals: 45,
  },
  {
    name: "Visit 9",
    scoreGoals: 76,
    ageGoals: 44,
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
  const [dateDiffFormat, setDateDiffFormat] = useState("");

  useEffect(() => {
    setTab(props.tab);
    selectDateRangeFunc();
  }, [props]);

  // this function will select the time range based upon year/month/week/day
  const selectDateRangeFunc = (selectedRange = "month") => {
    setSelectedTimeRange(selectedRange);
    let endDate,
      startDate,
      dateRangeArr = [];

    endDate = new Date();
    if (selectedRange == "year") {
      startDate = sub(endDate, {
        years: 1,
      });
    } else if (selectedRange == "month") {
      startDate = sub(endDate, {
        months: 1,
      });
    } else if (selectedRange == "week") {
      startDate = sub(endDate, {
        weeks: 1,
      });
    } else {
      startDate = sub(endDate, {
        days: 1,
      });
    }

    dateRangeArr = [startDate, endDate];
    setDateRange(dateRangeArr);
    filterData(dateRangeArr);
    formatDateDifferenceFunc(dateRangeArr);
  };

  // it filters the forms based upon the date range
  const filterData = (dateRangeArr = []) => {
    let vitalityScores = [],
      vitalityMetaGoals = [];
    if (selectedTimeRange && props.historyData) {
      const copyHistoryData = [].concat(props.historyData);
      const filteredHistoryData = copyHistoryData.filter((data, index) =>
        compareDesc(new Date(dateRangeArr[0]), new Date(data.timeStamp)) == 1 &&
        compareDesc(new Date(data.timeStamp), new Date(dateRangeArr[1])) == 1
          ? true
          : false
      );

      if (filteredHistoryData) {
        if (props.tab == "progress") {
          filteredHistoryData
            .slice(0)
            .reverse()
            .filter((data, index) => {
              vitalityScores.push({
                name: `Visit ${index}`,
                score: getVitalityScore({ ...data.form, score: 0 }),
                metaAge: getMetaAge({ ...data.form }),
              });
            });

          if (vitalityScores) {
            setVitalityProgressData(vitalityScores);
          }
        } else if (props.tab == "goals") {
          filteredHistoryData
            .slice(0)
            .reverse()
            .filter((data, index) => {
              vitalityMetaGoals.push({
                name: `Visit ${index}`,
                scoreGoals: getVitalityScore({ ...data.form, score: 2 }),
                ageGoals: getMetaAge({ ...data.form, typeFlag: "type1" }),
              });
            });

          if (vitalityMetaGoals) {
            setvitalityGoalsData(vitalityMetaGoals);
          }
        }
      }
    }
  };

  // this function will subtract the years/months, weeks, days based upon your selected time range
  const previous = () => {
    let endDate,
      startDate,
      updatedStartDate,
      updatedEndDate,
      dateRangeArr = [];

    endDate = dateRange[1];
    startDate = dateRange[0];

    if (selectedTimeRange == "year") {
      updatedStartDate = sub(startDate, {
        years: 1,
      });
      updatedEndDate = sub(endDate, {
        years: 1,
      });
    } else if (selectedTimeRange == "month") {
      updatedStartDate = sub(startDate, {
        months: 1,
      });
      updatedEndDate = sub(endDate, {
        months: 1,
      });
    } else if (selectedTimeRange == "week") {
      updatedStartDate = sub(startDate, {
        weeks: 1,
      });
      updatedEndDate = sub(endDate, {
        weeks: 1,
      });
    } else {
      updatedStartDate = sub(startDate, {
        days: 1,
      });
      updatedEndDate = sub(endDate, {
        days: 1,
      });
    }

    dateRangeArr = [updatedStartDate, updatedEndDate];
    setDateRange(dateRangeArr);
    formatDateDifferenceFunc(dateRangeArr);
    filterData(dateRangeArr);
  };

  // this function will add the years/months, weeks, days based upon your selected time range
  const next = () => {
    let endDate,
      startDate,
      updatedStartDate,
      updatedEndDate,
      dateRangeArr = [];

    endDate = dateRange[1];
    startDate = dateRange[0];

    if (selectedTimeRange == "year") {
      updatedStartDate = add(startDate, {
        years: 1,
      });
      updatedEndDate = add(endDate, {
        years: 1,
      });
    } else if (selectedTimeRange == "month") {
      updatedStartDate = add(startDate, {
        months: 1,
      });
      updatedEndDate = add(endDate, {
        months: 1,
      });
    } else if (selectedTimeRange == "week") {
      updatedStartDate = add(startDate, {
        weeks: 1,
      });
      updatedEndDate = add(endDate, {
        weeks: 1,
      });
    } else {
      updatedStartDate = add(startDate, {
        days: 1,
      });
      updatedEndDate = add(endDate, {
        days: 1,
      });
    }

    dateRangeArr = [updatedStartDate, updatedEndDate];
    setDateRange(dateRangeArr);
    formatDateDifferenceFunc(dateRangeArr);
    filterData(dateRangeArr);
  };

  // it will check the date range and will format the range of time
  const formatDateDifferenceFunc = (dateRangeArr) => {
    let dateFormat = "";
    if (dateRangeArr[0] && dateRangeArr[1]) {
      dateFormat = `${format(
        new Date(dateRangeArr[0]),
        "MMMM d yyyy "
      )}-${format(new Date(dateRangeArr[1]), " MMMM d yyyy")}`;
    }

    setDateDiffFormat(dateFormat);
  };

  const loadHistoryData = () => {
    props.loadHistoryData();
    toast("The data has been saved.");
  };
  return (
    <div className="bg-secondary sm:border-[1px]">
      <div>
        <div className="flex w-full max-w-none flex-row flex-nowrap">
          <div
            className={`flex w-1/2 cursor-pointer flex-row flex-nowrap justify-center py-4 sm:border-b-[1px] ${
              props.tab == "progress"
                ? "border-b-[6px] border-b-primary sm:bg-primary"
                : ""
            }`}
            onClick={() => props.setTab("progress")}
          >
            <p
              className={`text-center font-montserrat text-xs leading-5 sm:text-xl ${
                props.tab == "progress"
                  ? "font-bold sm:text-secondary"
                  : "text-black"
              }`}
            >
              Vitality Progress
            </p>
          </div>
          <div
            className={`flex w-1/2 cursor-pointer flex-row flex-nowrap justify-center py-4 sm:border-l-[1px] sm:border-b-[1px] ${
              props.tab == "goals"
                ? "border-b-[6px] border-b-primary sm:bg-primary"
                : ""
            }`}
            onClick={() => props.setTab("goals")}
          >
            <p
              className={`text-center font-montserrat text-xs leading-5 sm:text-xl   ${
                props.tab == "goals"
                  ? "font-bold sm:text-secondary"
                  : "text-black"
              }`}
            >
              Vitality Goals
            </p>
          </div>
        </div>
        <div className="py-8 px-4 sm:px-12 sm:py-10">
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
            <div className="w-[12px] sm:w-[22px]" onClick={() => previous()}>
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
            <div className="cursor-pointer font-montserrat text-sm font-light text-black sm:text-base sm:font-bold">
              {dateDiffFormat}
            </div>
            <div className="w-[12px] sm:w-[22px]" onClick={() => next()}>
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
                <div className="w-[40px] sm:w-[80px]">
                  <svg
                    width="100%"
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
                    Vitality Score
                  </p>
                </div>

                <div className="w-[40px] sm:w-[80px]">
                  <svg
                    width="100%"
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
                  <p className="font-montserrat text-xs leading-5 text-primary sm:text-base">
                    Metabolic Age
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <div className="w-[40px] sm:w-[80px]">
                  <svg
                    width="100%"
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
                    <circle cx="40" cy="10.3101" r="10" fill="#7D9D92" />
                  </svg>
                </div>
                <div>
                  <p className="font-montserrat text-xs leading-5 text-primary sm:text-base">
                    Vitality Score Goals
                  </p>
                </div>

                <div className="w-[40px] sm:w-[80px]">
                  <svg
                    width="100%"
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
                  <p className="font-montserrat text-xs leading-5 text-primary sm:text-base">
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
                    line1Color="#6D7B9B"
                    line2Color="#F7A08C"
                    line1DataKey="score"
                    line2DataKey="metaAge"
                    YLable={"Score"}
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
        <EditVitalityCalculator
          close={() => setHistoricalDataPopup(false)}
          loadHistoryData={loadHistoryData}
        />
      ) : null}
    </div>
  );
}
