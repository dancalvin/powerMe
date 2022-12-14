function getScorePercentile({
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
  score,
  a1c,
  newA1c,
  a1cPref,
  newA1cPref,
  diastolicBP,
  newDiastolicBP,
}) {
  let bmi, zNumber, percentile, miscData;

  bmi = 25;
  zNumber = 20;
  percentile = 20;
  miscData = 100;

  if (score === 0) {
    let sugarNumber = 0;
    sugarNumber = parseInt(glucose);

    let realHeight = feet * 12 + parseInt(inches);
    let heightSquared = realHeight * realHeight;
    let weightStarter = weight * 703;

    miscData = heightSquared;
    bmi = weightStarter / heightSquared;
    if (sex === "Male") {
      zNumber =
        -4.8316 +
        0.0315 * bmi -
        0.0272 * parseInt(hdl) +
        0.0044 * parseInt(pressure) +
        0.8018 * Math.log(parseInt(trigl)) +
        0.0101 * sugarNumber;
    } else {
      zNumber =
        -6.5231 +
        0.0523 * bmi -
        0.0138 * parseInt(hdl) +
        0.0081 * parseInt(pressure) +
        0.6125 * Math.log(parseInt(trigl)) +
        0.0208 * sugarNumber;
    }
    percentile =
      100 *
      (1 / (1 + Math.exp(-0.07056 * Math.pow(zNumber, 3) - 1.5976 * zNumber)));
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
    miscData = heightSquared;
    bmi = weightStarter / heightSquared;
    if (sex === "Male") {
      zNumber =
        -4.8316 +
        0.0315 * bmi -
        0.0272 * parseInt(newHdl) +
        0.0044 * parseInt(newPressure) +
        0.8018 * Math.log(parseInt(newTrigl)) +
        0.0101 * sugarNumber;
    } else {
      zNumber =
        -6.5231 +
        0.0523 * bmi -
        0.0138 * parseInt(newHdl) +
        0.0081 * parseInt(newPressure) +
        0.6125 * Math.log(parseInt(newTrigl)) +
        0.0208 * sugarNumber;
    }
    percentile =
      100 *
      (1 / (1 + Math.exp(-0.07056 * Math.pow(zNumber, 3) - 1.5976 * zNumber)));
  }

  return percentile;
}

function getVitalityScore(props) {
  const percentile = getScorePercentile(props);
  return ((percentile - 100) * -1).toFixed(0);
}

function getMetaAge({
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
  waist,
  newWaist,
  typeFlag,
}) {
  let metaAgeData = 0;
  let baseNum = -82.688;
  let wcNum = 0.779;
  let cmConv = 2.54;
  let mapperNumTwo = 0.227;
  let fbsNum = 0.269;
  let tgNum = 0.085;
  let hdlNum = 0.481;
  let ageNum = 0.538;
  let mapperNumOne = 0.3333;

  if (typeFlag === "type1") {
    let mappedVar =
      parseFloat(newDiastolicBP) +
      parseFloat(mapperNumOne * (newPressure - newDiastolicBP));
    let metaAgeTempVar =
      baseNum +
      wcNum * (newWaist * cmConv) +
      mapperNumTwo * mappedVar +
      fbsNum * newGlucose +
      tgNum * newTrigl -
      hdlNum * newHdl +
      ageNum * age;
    metaAgeData = metaAgeTempVar.toFixed(0);
  } else {
    let mappedVar =
      parseFloat(diastolicBP) +
      parseFloat(mapperNumOne * (pressure - diastolicBP));
    let metaAgeTempVar =
      baseNum +
      wcNum * (waist * cmConv) +
      mapperNumTwo * mappedVar +
      fbsNum * glucose +
      tgNum * trigl -
      hdlNum * hdl +
      ageNum * age;
    metaAgeData = metaAgeTempVar.toFixed(0);
  }

  return metaAgeData;
}

const getHeartFitScore = ({
  age,
  sex,
  weight,
  weightUnit,
  timeHour,
  timeMinute,
  timeSecond,
  heartRate,
  newWeight,
  newTime,
  diastolicBP,
  newDiastolicBP,
  metabolicAge,
  a1cPref,
  newA1cPref,
  newA1c,
}) => {
  let hfScore, walkingTime;
  walkingTime =
    parseInt(timeHour) * 60 + parseInt(timeMinute) + parseInt(timeSecond) / 60;

  if (weightUnit == "(kg)") {
    weight = weight * 2.20462;
  }
  if (sex == "male") {
    hfScore =
      132.853 -
      0.0769 * weight -
      0.3877 * age +
      6.315 -
      3.2649 * walkingTime -
      0.1565 * heartRate;
  } else {
    hfScore =
      132.853 -
      0.0769 * weight -
      0.3877 * age +
      0 -
      3.2649 * walkingTime -
      0.1565 * heartRate;
  }

  hfScore = hfScore.toFixed(0);
  return hfScore;
};

export { getScorePercentile, getVitalityScore, getMetaAge, getHeartFitScore };
