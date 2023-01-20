import React, { useState, useEffect } from "react";
import { compareAsc, format } from "date-fns";
import { useSwipeable } from "react-swipeable";
import { toast } from "react-toastify";
import VitalityScoreGraph from "./VitalityScoreGraph";
import EditDataPopup from "./EditDataPopup";
import { getVitalityScore, getMetaAge } from "../../../utils";
import VitalityScoreGoalsPopup from "../VitalityScoreGoalsPopup";
import VitalityScoreResultsPopup from "../VitalityScoreResultsPopup";

import { share, closeIcon, trash } from "../../../components/Svgs";

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
      className="relative flex flex-row flex-nowrap border-b-[1px] sm:mt-16 sm:border-[1px] sm:border-l-[15px] sm:border-l-primary"
      {...handlers}
    >
      <div
        className={`flex grow flex-row flex-nowrap justify-between py-10 px-0 sm:px-6 md:py-10 lg:pl-6 xl:pl-20`}
        onClick={() => setActionArea(false)}
      >
        <div className="flex w-full flex-col justify-around">
          <div className="">
            <div>
              <span className="font-montserrat text-xl font-bold leading-6 text-black ">
                {format(new Date(vsHistory.timeStamp), "MMMM, dd yyyy")}
              </span>
            </div>

            <div className="flex flex-row flex-wrap md:flex-col lg:flex-row">
              <div className="mt-4 w-1/2 border-r-[1px] max-sm:pr-1 md:w-full md:border-r-0 lg:w-1/2 lg:border-r-[1px]">
                <p className="font-montserrat text-base leading-[20px] text-primary">
                  Your Metabolic Age
                </p>
                <p className="font-montserrat text-4xl leading-[49px] text-primary md:w-full lg:w-1/2">
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

        <div className="relative hidden h-[300px] min-w-[200px] grow flex-col justify-between sm:min-w-[320px] md:flex">
          <VitalityScoreGraph value1={metabolicAge} value2={scoreStyle} />

          <div className="absolute right-0 left-0 top-0 bottom-0 flex items-center justify-center">
            <p className="text-xl font-bold">
              <span className="text-primary">{metabolicAge}</span>/
              <span className="text-third">{scoreStyle}</span>
            </p>
          </div>
        </div>
      </div>

      {/** delete or share this entry*/}
      <div
        className={`max-w-auto absolute top-6 bottom-0 right-0 flex h-auto grow flex-row-reverse justify-between gap-3 p-5 sm:top-0 sm:max-w-[80px] sm:flex-col  ${
          actionArea ? "right-[80px]" : ""
        }`}
      >
        <div
          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-[1px] sm:h-8 sm:w-8"
          onClick={() => props.setDeletePopupToggleFunc(props)}
        >
          {closeIcon}
        </div>

        <div
          className="flex h-5 w-5 cursor-pointer items-center justify-center sm:h-8 sm:w-8"
          onClick={() => setShareGoalsPopup(true)}
        >
          {share}
        </div>
      </div>

      {/* swaping area only visible after swiping and in mobile*/}
      {actionArea ? (
        <div
          className={`flex min-h-full min-w-[80px] cursor-pointer items-center justify-center bg-[#F2644E] sm:hidden`}
          onClick={() => props.setDeletePopupToggleFunc(props)}
        >
          {trash}
        </div>
      ) : null}

      {/* popup to edit the data*/}
      {historicalDataPopup && vsHistory ? (
        <EditDataPopup
          vsHistory={vsHistory}
          close={() => setHistoricalDataPopup(false)}
          loadHistoryData={loadHistoryData}
        />
      ) : null}

      {/** share the goals/results */}
      {shareGoalsPopup ? (
        props.tab == "goals" ? (
          <VitalityScoreGoalsPopup
            form={props.form}
            close={() => setShareGoalsPopup(false)}
          />
        ) : (
          <VitalityScoreResultsPopup
            form={props.form}
            close={() => setShareGoalsPopup(false)}
            metaAge={metabolicAge}
          />
        )
      ) : null}
    </div>
  ) : null;
};

export default VitalityScoreHistory;
