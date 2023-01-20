import React, { useEffect, useState } from "react";
import { H1, H2, H3, P, P2 } from "../../../components/Typography";
import { getVitalityScore, getMetaAge } from "../../../utils/index";

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
    <div>
      {score === 1 ? (
        <div className="mb-10 flex flex-row justify-between sm:mb-0">
          <div>
            <h2 className="m-0 text-base font-light md:text-[22px] md:leading-[26px] lg:text-[26px] lg:leading-[32px] xl:text-[32px] xl:leading-[39px]">
              Your Vitality<br></br> Score Could Be
            </h2>
            <h1 className="mb-10 p-0 text-left text-[40px] font-bold leading-[80px] sm:mb-[50px] sm:font-normal md:mb-[70px] xl:text-[80px] xl:leading-[100px] 2xl:mb-[86px]">
              {scoreStyle}
            </h1>
          </div>
          <div>
            <h2 className="m-0 text-base font-light md:text-[22px] md:leading-[26px] lg:text-[26px] lg:leading-[32px] xl:text-[32px] xl:leading-[39px]">
              Your Metabolic<br></br> Age Could Be
            </h2>
            <h1 className="mb-10 p-0 text-right text-[40px] font-bold leading-[80px] sm:mb-[50px] sm:text-center sm:font-normal md:mb-[70px] xl:text-[80px] xl:leading-[100px] 2xl:mb-[86px]">
              {metabolicAge}
            </h1>
          </div>
        </div>
      ) : (
        <div className="text-left sm:text-center">
          <H2>{title}</H2>
          <h1 className="mb-10 p-0 text-left text-[60px] leading-[80px] sm:mb-[80px] sm:text-center md:mb-[70px] xl:text-[80px] xl:leading-[100px] 2xl:mb-[86px]">
            {scoreStyle}
          </h1>
        </div>
      )}

      <div className="relative pb-[50px]">
        <div className="relative flex items-center justify-center">
          <img src={image} alt="graph" />

          <span
            className="absolute left-1/2 bottom-[1px] w-[2px] -translate-x-1/2 bg-black"
            style={{
              left: scoreStyle + "%",
              height: scoreHeight + "%",
            }}
          >
            <span
              className="absolute bottom-[100%] flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full bg-[#6d7b9b] font-sans text-xl font-bold leading-6 text-secondary"
              style={{
                left: scoreStyle + "%",
              }}
            >
              {scoreStyle}
            </span>
          </span>
        </div>

        {score === 1 ? null : (
          <span
            className={`absolute bottom-[27px] left-1/2 h-[25px] w-[44%] max-w-[473px] -translate-x-1/2 border-[1px] border-t-0 border-solid border-black before:absolute before:left-1/2 before:-bottom-[15px] before:h-[15px] before:w-[1px] before:-translate-x-1/2 before:bg-black before:content-[""]`}
          ></span>
        )}

        <span className="absolute bottom-3 left-0 font-sans text-xl font-light leading-6">
          1
        </span>
        <span className="absolute bottom-3 right-0 font-sans text-xl font-light leading-6">
          100
        </span>
      </div>

      {score === 1 ? null : (
        <span className="block text-left text-base font-bold sm:text-center">
          Your Vitality Score is better than {scoreStyle}% of your peers.
        </span>
      )}
    </div>
  );
}
