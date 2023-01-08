import React, { useState, useEffect } from "react";
import { compareAsc, format } from "date-fns";
import { useSwipeable } from "react-swipeable";
import { toast } from "react-toastify";
import VitalityScoreGraph from "./VitalityScoreGraph";
import EditVitalityCalculator from "../EditVitalityCalculator";
import { getVitalityScore, getMetaAge } from "../../utils";
import { GoalsToShare } from "../Index/Step5";

const VitalityScoreHistory = (props) => {
  const [actionArea, setActionArea] = useState(false);
  const [vsHistory, setVsHistory] = useState(null);
  const [scoreStyle, setScoreStyle] = useState("");
  const [metabolicAge, setMetabolicAge] = useState(0);
  const [historicalDataPopup, setHistoricalDataPopup] = useState(false);
  const [shareGoalsPopup, setShareGoalsPopup] = useState(false);

  useEffect(() => {
    let vScore, metaAgeData;
    if (props.tab == "goals") {
      vScore = getVitalityScore({ ...props.form, score: 2 });
      metaAgeData = getMetaAge({ ...props.form, typeFlag: "type1" });
    } else {
      vScore = getVitalityScore({ ...props.form, ["score"]: 0 });
      metaAgeData = getMetaAge({ ...props.form });
    }

    setScoreStyle(vScore);
    setMetabolicAge(metaAgeData);
    setVsHistory(props.vsHistory);
  }, [props]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActionArea(true);
    },
    onSwipedRight: () => {
      setActionArea(false);
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const loadHistoryData = () => {
    props.loadHistoryData();
    toast("The data has been saved.");
  };

  return vsHistory ? (
    <div
      className="relative flex flex-row flex-nowrap border-b-[1px] sm:mt-16 sm:border-[1px] sm:border-l-[15px] sm:border-l-primary "
      {...handlers}
    >
      <div
        className={`flex grow flex-row flex-nowrap justify-between py-10 px-0 sm:px-6 sm:pl-6 md:pl-20`}
        onClick={() => setActionArea(false)}
      >
        <div className="w-full">
          <div className="">
            <div>
              <span className="font-montserrat text-xl font-bold leading-6 text-black ">
                {format(new Date(vsHistory.timeStamp), "MMMM, dd yyyy")}
              </span>
            </div>

            <div className="flex flex-row flex-wrap ">
              <div className="mt-4 w-1/2 border-r-[1px] max-sm:pr-1">
                <p className="font-montserrat text-base leading-[20px] text-primary">
                  Your Metabolic Age
                </p>
                <p className="font-montserrat text-4xl leading-[49px] text-primary">
                  {metabolicAge}
                </p>
              </div>

              <div className="mt-4 flex w-1/2 flex-col items-center pl-2">
                <div>
                  <p className="font-montserrat text-base leading-[20px] text-third">
                    Your Vitality Score
                  </p>
                  <p className="font-montserrat text-4xl leading-[49px] text-third">
                    {scoreStyle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:block">
            <button
              className="mt-10 mr-3 rounded-3xl bg-black py-3 px-10 text-center font-montserrat text-xl font-bold leading-[24px] text-secondary"
              onClick={() => setHistoricalDataPopup(true)}
            >
              See Full Results
            </button>
          </div>
        </div>

        <div className="relative hidden min-w-[200px] grow sm:block">
          <VitalityScoreGraph value1={metabolicAge} value2={scoreStyle} />

          <div className="absolute right-0 left-0 top-0 bottom-0 flex items-center justify-center">
            <p className="text-xl font-bold">
              <span className="text-primary">{metabolicAge}</span>/
              <span className="text-third">{scoreStyle}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-auto absolute top-0 bottom-0 right-0 flex grow flex-row-reverse justify-between gap-2 p-5 sm:max-w-[80px] sm:flex-col md:relative">
        <div
          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-[1px] sm:h-8 sm:w-8"
          onClick={() => props.setDeletePopupToggleFunc(props)}
        >
          <svg
            className="h-[11px] w-[10px] sm:h-[13px] sm:w-[14px]"
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

        <div
          className="flex h-5 w-5 cursor-pointer items-center justify-center sm:h-8 sm:w-8"
          onClick={() => setShareGoalsPopup(true)}
        >
          <svg
            width="26"
            height="26"
            className="h-[16px] w-[16px] sm:h-[26px] sm:w-[26px]"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.44721 14.1056C8.95324 13.8586 8.35256 14.0588 8.10557 14.5528C7.85858 15.0468 8.05881 15.6474 8.55279 15.8944L9.44721 14.1056ZM16.5528 19.8944C17.0468 20.1414 17.6474 19.9412 17.8944 19.4472C18.1414 18.9532 17.9412 18.3526 17.4472 18.1056L16.5528 19.8944ZM17.4472 7.89443C17.9412 7.64744 18.1414 7.04676 17.8944 6.55279C17.6474 6.05881 17.0468 5.85858 16.5528 6.10557L17.4472 7.89443ZM8.55279 10.1056C8.05881 10.3526 7.85858 10.9532 8.10557 11.4472C8.35256 11.9412 8.95324 12.1414 9.44721 11.8944L8.55279 10.1056ZM21 24C19.3431 24 18 22.6569 18 21H16C16 23.7614 18.2386 26 21 26V24ZM18 21C18 19.3431 19.3431 18 21 18V16C18.2386 16 16 18.2386 16 21H18ZM21 18C22.6569 18 24 19.3431 24 21H26C26 18.2386 23.7614 16 21 16V18ZM24 21C24 22.6569 22.6569 24 21 24V26C23.7614 26 26 23.7614 26 21H24ZM8.55279 15.8944L16.5528 19.8944L17.4472 18.1056L9.44721 14.1056L8.55279 15.8944ZM5 16C3.34315 16 2 14.6569 2 13H0C0 15.7614 2.23858 18 5 18V16ZM2 13C2 11.3431 3.34315 10 5 10V8C2.23858 8 0 10.2386 0 13H2ZM5 10C6.65685 10 8 11.3431 8 13H10C10 10.2386 7.76142 8 5 8V10ZM8 13C8 14.6569 6.65685 16 5 16V18C7.76142 18 10 15.7614 10 13H8ZM16.5528 6.10557L8.55279 10.1056L9.44721 11.8944L17.4472 7.89443L16.5528 6.10557ZM21 8C19.3431 8 18 6.65685 18 5H16C16 7.76142 18.2386 10 21 10V8ZM18 5C18 3.34315 19.3431 2 21 2V0C18.2386 0 16 2.23858 16 5H18ZM21 2C22.6569 2 24 3.34315 24 5H26C26 2.23858 23.7614 0 21 0V2ZM24 5C24 6.65685 22.6569 8 21 8V10C23.7614 10 26 7.76142 26 5H24Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {actionArea ? (
        <div
          className={`flex min-h-full min-w-[80px] cursor-pointer items-center justify-center bg-[#F2644E] sm:hidden`}
          onClick={() => props.setDeletePopupToggleFunc(props)}
        >
          <svg
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8922 20.9999H2.82282L0.795898 5.70215H14.9191L12.8922 20.9999Z"
              stroke="#FAF4ED"
              stroke-miterlimit="10"
            />
            <path
              d="M5.34662 17.0033L4.51465 8.92822"
              stroke="#FAF4ED"
              stroke-miterlimit="10"
            />
            <path
              d="M7.85547 17.0033V8.92822"
              stroke="#FAF4ED"
              stroke-miterlimit="10"
            />
            <path
              d="M10.3672 17.0033L11.1992 8.92822"
              stroke="#FAF4ED"
              stroke-miterlimit="10"
            />
            <path
              d="M0 3.53662H15.7137"
              stroke="#FAF4ED"
              stroke-miterlimit="10"
            />
            <path
              d="M11.6097 3.53671L10.9817 1H4.72962L4.10156 3.53671"
              stroke="#FAF4ED"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
      ) : null}

      {historicalDataPopup && vsHistory ? (
        <EditVitalityCalculator
          vsHistory={vsHistory}
          close={() => setHistoricalDataPopup(false)}
          loadHistoryData={loadHistoryData}
        />
      ) : null}

      {shareGoalsPopup ? (
        <GoalsToShare
          form={props.form}
          setShareGoalsPopup={setShareGoalsPopup}
        />
      ) : null}
    </div>
  ) : null;
};

export default VitalityScoreHistory;
