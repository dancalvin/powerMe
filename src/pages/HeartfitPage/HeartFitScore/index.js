import React, { useEffect, useState } from "react";
import { getVitalityScore, getMetaAge, getHeartFitScore } from "../../../utils";

import { H1, H2 } from "../../../components/Typography";
import HeartFitScoreGraph from "./HeartFitScoreGraph";

export default function HeartFitScore({ form, tab }) {
  const [hScore, setHScore] = useState("");
  const [scoreStyle, setScoreStyle] = useState("");
  const [minScoreStyle, setMinScoreStyle] = useState(0);
  const [maxScoreStyle, setMaxScoreStyle] = useState(0);

  useEffect(() => {
    //const vScore = getVitalityScore({ ...form, score: 0 });
    let vScore;

    if (tab == "goals") {
      vScore = getHeartFitScore({
        ...form,
        type: "new",
      });
    } else {
      vScore = getHeartFitScore({ ...form });
    }
    //const vScore = getHeartFitScore({ ...form });
    const min = 10;
    const max = 120;
    const style = (vScore - min) * (100 / (max - min));
    setHScore(vScore);
    setScoreStyle(style.toFixed(0));
    setMinScoreStyle(min);
    setMaxScoreStyle(max);
  });

  return (
    <div className="goal mb-[30px] w-full text-center md:mb-20">
      <div className="text-left sm:text-center">
        <H2>Your Heart-Fit Score {tab == "goals" ? "Could Be" : "Is"}:</H2>
        <h1 className="mb-[80px] p-0  text-left text-[80px] leading-[98px]  sm:text-center md:mb-[120px] xl:text-[80px] xl:leading-[100px]">
          {hScore}
        </h1>
      </div>

      <HeartFitScoreGraph
        hScore={hScore}
        scoreStyle={scoreStyle}
        minScoreStyle={minScoreStyle}
        maxScoreStyle={maxScoreStyle}
      ></HeartFitScoreGraph>
    </div>
  );
}
