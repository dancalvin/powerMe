import React, { useState, useEffect } from "react";
import { compareAsc, format } from "date-fns";
import { useSwipeable } from "react-swipeable";
import { toast } from "react-toastify";
import { closeIcon, share, trash } from "../Base/SVG";
import { GoalsToShare } from "../Index/Step5";
import EditDataPopup from "./EditDataPopup";
import { getHeartFitScore } from "../../utils/index";
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
          <GoalsToShare
            form={props.hfHistory.form}
            setShareGoalsPopup={setShareGoalsPopup}
            tab={props.tab}
          />
        ) : null}
      </div>
    </>
  );
};

export default HeartFitScoreHistory;
