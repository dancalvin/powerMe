import React from "react";
import { useState, useEffect } from "react";

export default function ScoreLogic({
  age,
  sex,
  race,
  feet,
  inches,
  heightUnit,
  weight,
  weightUnit,
  pressure,
  hdl,
  trigl,
  glucose,
  newWeight,
  newPressure,
  newHdl,
  newTrigl,
  newGlucose,
  setScoreStyle,
  score,
  a1c,
  newA1c,
  a1cPref,
  newA1cPref,
  diastolicBP,
  newDiastolicBP,
}) {
  const [bmi, setBmi] = useState(25);
  const [zNumber, setZNumber] = useState(20);
  const [percentile, setPercentile] = useState(20);
  const [miscData, setMiscData] = useState(100);
  // <div>BMI:{bmi.toFixed(0)}<br></br>{((percentile -100)*-1).toFixed(0)}%</div>

  useEffect(() => {
    if (score === 0) {
      let sugarNumber = 0;
      sugarNumber = parseInt(glucose);

      let realHeight = feet * 12 + parseInt(inches);
      let heightSquared = realHeight * realHeight;
      let weightStarter = weight * 703;

      setMiscData(heightSquared);
      setBmi(weightStarter / heightSquared);
      if (sex === "Male") {
        setZNumber(
          -4.8316 +
            0.0315 * bmi -
            0.0272 * parseInt(hdl) +
            0.0044 * parseInt(pressure) +
            0.8018 * Math.log(parseInt(trigl)) +
            0.0101 * sugarNumber
        );
      } else {
        setZNumber(
          -6.5231 +
            0.0523 * bmi -
            0.0138 * parseInt(hdl) +
            0.0081 * parseInt(pressure) +
            0.6125 * Math.log(parseInt(trigl)) +
            0.0208 * sugarNumber
        );
      }
      setPercentile(
        100 *
          (1 /
            (1 + Math.exp(-0.07056 * Math.pow(zNumber, 3) - 1.5976 * zNumber)))
      );
    } else {
      let sugarNumber = 0;
      if (newA1cPref === 0) {
        sugarNumber = parseInt(newGlucose);
      } else {
        sugarNumber = parseInt(parseFloat(newA1c) * 28.7 - 46.7);
      }

      let realHeight = feet * 12 + parseInt(inches);
      let heightSquared = realHeight * realHeight;
      let weightStarter = newWeight * 703;
      setMiscData(heightSquared);
      setBmi(weightStarter / heightSquared);
      if (sex === "Male") {
        setZNumber(
          -4.8316 +
            0.0315 * bmi -
            0.0272 * parseInt(newHdl) +
            0.0044 * parseInt(newPressure) +
            0.8018 * Math.log(parseInt(newTrigl)) +
            0.0101 * sugarNumber
        );
      } else {
        setZNumber(
          -6.5231 +
            0.0523 * bmi -
            0.0138 * parseInt(newHdl) +
            0.0081 * parseInt(newPressure) +
            0.6125 * Math.log(parseInt(newTrigl)) +
            0.0208 * sugarNumber
        );
      }
      setPercentile(
        100 *
          (1 /
            (1 + Math.exp(-0.07056 * Math.pow(zNumber, 3) - 1.5976 * zNumber)))
      );
    }
  });

  useEffect(() => {
    if (setScoreStyle) {
      const result = ((percentile - 100) * -1).toFixed(0);
      setScoreStyle(result);
    }
  }, [percentile]);

  return <>{((percentile - 100) * -1).toFixed(0)}</>;
}
