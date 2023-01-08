import React, { useEffect, useState } from "react";
import ScoreLogic from "./ScoreLogic";
import MetaCalc from "./CircleModel/MetaCalc.jsx";

import { getVitalityScore, getMetaAge } from "../../utils";
export default function VitalityScore({ form, title, score, image, clName }) {
  const [scoreStyle, setScoreStyle] = useState("");
  const [scoreHeight, setScoreHeight] = useState("");
  const [metabolicAge, setMetabolicAge] = useState(0);

  useEffect(() => {
    const vScore = getVitalityScore({ ...form, ["score"]: score });
    const metaAgeData = getMetaAge({ ...form, ["typeFlag"]: "type1" });
    setScoreStyle(vScore);
    setMetabolicAge(metaAgeData);
  });

  useEffect(() => {
    if (scoreStyle >= 0 && scoreStyle <= 10) {
      setScoreHeight(scoreStyle * 2);
    } else if (scoreStyle > 10 && scoreStyle < 20) {
      setScoreHeight(scoreStyle * 2 + 5);
    } else if (scoreStyle >= 20 && scoreStyle < 25) {
      setScoreHeight(scoreStyle * 2 + 13);
    } else if (scoreStyle >= 25 && scoreStyle <= 40) {
      setScoreHeight(scoreStyle * 2 + 20);
    } else if (scoreStyle > 40 && scoreStyle <= 45) {
      setScoreHeight(scoreStyle * 2 + 15);
    } else if (scoreStyle > 45 && scoreStyle <= 47) {
      setScoreHeight(scoreStyle * 2 + 10);
    } else if (scoreStyle > 47 && scoreStyle <= 50) {
      setScoreHeight(scoreStyle * 2 + 7);
    } else if (scoreStyle > 50 && scoreStyle < 53) {
      setScoreHeight((100 - scoreStyle) * 2 + 7);
    } else if (scoreStyle >= 53 && scoreStyle < 55) {
      setScoreHeight((100 - scoreStyle) * 2 + 10);
    } else if (scoreStyle >= 55 && scoreStyle < 60) {
      setScoreHeight((100 - scoreStyle) * 2 + 15);
    } else if (scoreStyle >= 60 && scoreStyle < 75) {
      setScoreHeight((100 - scoreStyle) * 2 + 20);
    } else if (scoreStyle >= 75 && scoreStyle < 80) {
      setScoreHeight((100 - scoreStyle) * 2 + 13);
    } else if (scoreStyle >= 80 && scoreStyle < 90) {
      setScoreHeight((100 - scoreStyle) * 2 + 5);
    } else {
      setScoreHeight((100 - scoreStyle) * 2);
    }
  }, [scoreStyle]);
  return (
    <div className={clName}>
      {image === "/images/graph2.png" ? (
        <div className="doterraRowNoSplit ">
          <div>
            <h2 className="min-sm:text-[16px] h2 font-light">
              Your Vitality<br></br> Score Could Be
            </h2>
            <h1 className="big h1 max-sm:!text-[40px] max-sm:!font-bold">
              {/*
                <ScoreLogic
                  {...form}
                  setScoreStyle={setScoreStyle}
                  score={score}
                />
                */}

              {scoreStyle}
            </h1>
          </div>
          <div>
            <h2 className="tagAlignRight h2 font-light max-sm:text-[16px]">
              Your Metabolic<br></br> Age Could Be
            </h2>
            <h1 className="big tagAlignRight h1 max-sm:!text-[40px] max-sm:!font-bold">
              {/*<MetaCalc {...form} typeFlag={"type1"} />*/}
              {metabolicAge}
            </h1>
          </div>
        </div>
      ) : (
        <>
          <h2 className="min-sm:text-[20px] h2">{title}</h2>
          <h1 className="big h1">
            {/*
              <ScoreLogic
                {...form}
                setScoreStyle={setScoreStyle}
                score={score}
              />
              */}
            {scoreStyle}
          </h1>
        </>
      )}

      <div className="vitality__inner">
        <div className="vitality__inner-image">
          <img src={process.env.PUBLIC_URL + image} alt="graph" />

          <span
            className="vitality__line"
            style={{
              left: scoreStyle + "%",
              height: scoreHeight + "%",
            }}
          >
            <span
              className="vitality__score"
              style={{
                left: scoreStyle + "%",
              }}
            >
              {/*<ScoreLogic {...form} score={score} />*/}
              {scoreStyle}
            </span>
          </span>
        </div>
        <span className="vitality__rectangle"></span>
        <span className="vitality__min">1</span>
        <span className="vitality__max">100</span>
      </div>
      <h3 className="bold max-sm:text-[16px]">
        Your Vitality Score is better than {scoreStyle}% of your peers.
      </h3>
    </div>
  );
}
