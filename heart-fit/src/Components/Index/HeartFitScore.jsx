import React, { useEffect, useState } from "react";
import { getVitalityScore, getMetaAge, getHeartFitScore } from "../../utils";

export default function HeartFitScore({ form }) {
  const [hScore, setHScore] = useState("");
  const [scoreStyle, setScoreStyle] = useState("");
  const [minScoreStyle, setMinScoreStyle] = useState(0);
  const [maxScoreStyle, setMaxScoreStyle] = useState(0);

  useEffect(() => {
    //const vScore = getVitalityScore({ ...form, score: 0 });
    const vScore = getHeartFitScore({ ...form });
    const min = 15;
    const max = 120;
    const style = (vScore - min) * (100 / (max - min));
    setHScore(vScore);
    setScoreStyle(style);
    setMinScoreStyle(min);
    setMaxScoreStyle(max);
  });

  return (
    <div className="heartFit goal w-full">
      <h2 className="h2 sm">Your Heart-Fit Score Could Be:</h2>
      <h1 className="h1 uniq">{hScore}</h1>

      <div className="heartFit__inner w-full">
        <div className="heartFit__inner-progress">
          <div className="heartFit__inner-progress-dot"></div>
          <div className="heartFit__inner-progress-dot"></div>
          <div className="heartFit__inner-progress-dot"></div>
          <div className="heartFit__inner-progress-dot"></div>
          <div className="heartFit__inner-progress-dot"></div>
          <span
            className="heartFit__line"
            style={{
              left: scoreStyle + "%",
              transform: `translateX(-${scoreStyle}%)`,
            }}
          >
            <span className="heartFit__score">{hScore}</span>
          </span>
        </div>
        <div className="heartFit__inner-marks">
          <div className="heartFit__inner-mark">Very Poor</div>
          <div className="heartFit__inner-mark">Poor</div>
          <div className="heartFit__inner-mark">Fair</div>
          <div className="heartFit__inner-mark">Good</div>
          <div className="heartFit__inner-mark">Excellent</div>
          <div className="heartFit__inner-mark">Superior</div>
        </div>
        <span className="heartFit__min">{minScoreStyle}</span>
        <span className="heartFit__max">{maxScoreStyle}</span>
      </div>
    </div>
  );
}
