import React, { useEffect, useState } from "react";
import styles from "./HeartFitScoreGraph.module.css";
import {
  getVitalityScore,
  getMetaAge,
  getHeartFitScore,
} from "../../../../utils";
import { H1, H2 } from "../../../../components/Typography";

export default function HeartfitScoreGraph({
  hScore,
  scoreStyle,
  minScoreStyle,
  maxScoreStyle,
  tab,
}) {
  return (
    <div className={"relative mb-[30px] w-full"}>
      <div className={styles["heartFit__inner-progress"]}>
        <div className={styles["heartFit__inner-progress-dot"]}></div>
        <div className={styles["heartFit__inner-progress-dot"]}></div>
        <div className={styles["heartFit__inner-progress-dot"]}></div>
        <div className={styles["heartFit__inner-progress-dot"]}></div>
        <div className={styles["heartFit__inner-progress-dot"]}></div>

        <span
          className={styles["heartFit__line"]}
          style={{
            left: scoreStyle + "%",
            transform: `translateX(-${scoreStyle}%)`,
          }}
        >
          <span className={styles["heartFit__score"]}>
            {hScore ? hScore : ""}
          </span>
        </span>
      </div>
      <div className={styles["heartFit__inner-marks"]}>
        <div className={styles["heartFit__inner-mark"]}>Very Poor</div>
        <div className={styles["heartFit__inner-mark"]}>Poor</div>
        <div className={styles["heartFit__inner-mark"]}>Fair</div>
        <div className={styles["heartFit__inner-mark"]}>Good</div>
        <div className={styles["heartFit__inner-mark"]}>Excellent</div>
        <div className={styles["heartFit__inner-mark"]}>Superior</div>
      </div>
      <span className={styles["heartFit__min"]}>
        {minScoreStyle ? minScoreStyle : ""}
      </span>
      <span className={styles["heartFit__max"]}>
        {maxScoreStyle ? maxScoreStyle : ""}
      </span>
    </div>
  );
}
