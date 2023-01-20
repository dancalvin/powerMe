import React, { useState, useEffect } from "react";
import { compareAsc, format } from "date-fns";
import { useSwipeable } from "react-swipeable";
import { toast } from "react-toastify";
import { closeIcon, share, trash } from "../../../components/Svgs";
import { GoalsToShare } from "../Step5";
import { HeartFitResultsPopup } from "../HeartFitResultsPopup";
import EditDataPopup from "./EditDataPopup";
import { getHeartFitScore } from "../../../utils/index";

import heart from "../../../assets/images/heart.png";
const HeartFitScoreHistory = (props) => {
  const [actionArea, setActionArea] = useState(false);
  const [hfHistory, setHfHistory] = useState(null);
  const [scoreStyle, setScoreStyle] = useState("");
  const [shareGoalsPopup, setShareGoalsPopup] = useState(false);
  const [historicalDataPopup, setHistoricalDataPopup] = useState(false);

  useEffect(() => {
    let hfScore;
    if (props.tab == "goals") {
      hfScore = getHeartFitScore({
        ...props.hfHistory.form,
        type: "new",
      });
    } else {
      hfScore = getHeartFitScore({ ...props.hfHistory.form });
    }
    setScoreStyle(hfScore);
    setHfHistory(props.hfHistory);
  }, [props]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActionArea(true);
      console.log("swiping left");
    },
    onSwipedRight: () => {
      setActionArea(false);
      console.log("swiping right");
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const loadHistoryData = () => {
    props.loadHistoryData();
    toast("The data has been saved.");
  };

  return (
    <div
      className="relative flex flex-row flex-nowrap border-b-[1px] sm:mt-16 sm:border-[1px] sm:border-l-[15px] sm:border-l-primary "
      {...handlers}
    >
      <div
        className={`flex grow flex-row flex-nowrap justify-between py-10 px-0 sm:px-6 md:py-10 lg:pl-6 xl:pl-20`}
        onClick={() => setActionArea(false)}
      >
        <div className="flex w-full flex-col justify-around md:w-[calc(50%-10px)]">
          <div className="">
            <div>
              <span className="font-montserrat text-xl font-bold leading-6 text-black ">
                {hfHistory
                  ? format(new Date(hfHistory.timeStamp), "MMMM, dd yyyy")
                  : ""}
              </span>
            </div>
            <div className="flex flex-row flex-wrap ">
              <div className="mt-5 flex w-full flex-row flex-nowrap items-center max-sm:pr-1 md:flex-col md:items-start lg:flex-row">
                <p
                  className={`sm:border-b-solid relative mr-[20px] border-b-0 pr-0 font-montserrat text-xl leading-[29px] text-black before:absolute before:right-0 before:top-1/2 before:h-[60px] before:w-[1px] before:-translate-y-1/2 before:bg-black before:content-none md:mr-[35px] md:mb-[10px] md:border-b-[1px] lg:border-b-0 lg:pr-[35px] lg:text-2xl lg:before:content-[""]`}
                >
                  Heart-Fit Score
                </p>
                <p className="font-montserrat text-4xl font-bold leading-[49px] text-primary sm:font-normal">
                  {scoreStyle}
                </p>
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

        <div className="relative hidden h-auto min-w-[200px] grow flex-row justify-center md:flex md:w-[calc(50%-10px)] md:min-w-[320px]">
          <div className="pointer-events-none relative flex h-[190px] w-[220px] items-center justify-center">
            <img src={heart} alt="" className="w-full" />
            <div className="absolute right-0 left-0 top-0 bottom-0 flex items-center justify-center">
              <p className="text-xl font-bold">
                <span className="text-primary">{scoreStyle}</span>
              </p>
            </div>
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
      {historicalDataPopup && hfHistory ? (
        <EditDataPopup
          hfHistory={hfHistory}
          close={() => setHistoricalDataPopup(false)}
          loadHistoryData={loadHistoryData}
        />
      ) : null}

      {/* share the results or goals */}
      {shareGoalsPopup ? (
        props.tab == "goals" ? (
          <HeartFitResultsPopup
            form={props.hfHistory.form}
            close={() => setShareGoalsPopup(false)}
            tab={props.tab}
          />
        ) : (
          <HeartFitResultsPopup
            form={props.hfHistory.form}
            close={() => setShareGoalsPopup(false)}
            tab={props.tab}
          />
        )
      ) : null}
    </div>
  );
};

/*


<>
      <div
        className={"history__item " + (actionArea ? "active" : "")}
        {...handlers}
      >
        <div
          className="history__item-inner"
          onClick={() => setActionArea(false)}
        >
          <div className="history__item-col">
            <h3 className="h3 bold">
              {hfHistory
                ? format(new Date(hfHistory.timeStamp), "MMMM, dd yyyy")
                : ""}
            </h3>
            <div className="history__item-col-score">
              <h3 className="h3 big">
                <span>Your</span> Heart-Fit Score
              </h3>
              <h2 className="h2 big">{scoreStyle}</h2>
            </div>
            <div
              className="button primary"
              onClick={() => setHistoricalDataPopup(true)}
            >
              See Full Results
            </div>
          </div>
          <div className="history__item-col">
            <div className="history__item-col-image">
              <img
                src={process.env.PUBLIC_URL + "/images/heart.png"}
                alt="heart"
              />
              <h3 className="h3 bold">{scoreStyle}</h3>
            </div>
          </div>

          <div
            className={"history__item-close " + (actionArea ? "active" : "")}
            onClick={() => props.setDeletePopupToggleFunc(props)}
          >
            {closeIcon}
          </div>
          <div
            className={"history__item-share " + (actionArea ? "active" : "")}
            onClick={() => setShareGoalsPopup(true)}
          >
            {share}
          </div>
        </div>
        {actionArea ? (
          <div
            className="history__item-red"
            onClick={() => props.setDeletePopupToggleFunc(props)}
          >
            {trash}
          </div>
        ) : (
          ""
        )}

        {historicalDataPopup && hfHistory ? (
          <EditDataPopup
            hfHistory={hfHistory}
            close={() => setHistoricalDataPopup(false)}
            loadHistoryData={loadHistoryData}
          />
        ) : null}

        {shareGoalsPopup ? (
          <HeartFitResultsPopup
            form={props.hfHistory.form}
            setShareGoalsPopup={setShareGoalsPopup}
            tab={props.tab}
          />
        ) : null}
      </div>
    </>

*/

export default HeartFitScoreHistory;
