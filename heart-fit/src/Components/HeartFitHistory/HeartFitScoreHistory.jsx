import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { closeIcon, share, trash } from "../Base/SVG";

const HeartFitScoreHistory = (props) => {
  const [actionArea, setActionArea] = useState(false);
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

  return (
    <>
      <div
        className={"history__item " + (actionArea ? "active" : "")}
        {...handlers}
      >
        <div className="history__item-inner">
          <div className="history__item-col">
            <h3 className="h3 bold">November 15, 2022</h3>
            <div className="history__item-col-score">
              <h3 className="h3 big">
                <span>Your</span> Heart-Fit Score
              </h3>
              <h2 className="h2 big">35.3</h2>
            </div>
            <div className="button primary">See Full Results</div>
          </div>
          <div className="history__item-col">
            <div className="history__item-col-image">
              <img
                src={process.env.PUBLIC_URL + "/images/heart.png"}
                alt="heart"
              />
              <h3 className="h3 bold">35.3</h3>
            </div>
          </div>

          <div
            className={"history__item-close " + (actionArea ? "active" : "")}
            onClick={props.setDeletePopupToggle}
          >
            {closeIcon}
          </div>
          <div
            className={"history__item-share " + (actionArea ? "active" : "")}
          >
            {share}
          </div>
        </div>
        {actionArea ? (
          <div
            className="history__item-red"
            onClick={props.setDeletePopupToggle}
          >
            {trash}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default HeartFitScoreHistory;
