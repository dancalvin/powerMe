export const VitalityScoreInitForm = {
  age: null,
  sex: "",
  asian: false,
  pacIsl: false,
  whiteOrCaucas: false,
  blackAfrAmer: false,
  hispLat: false,
  natAmerAlas: false,
  multBirac: false,
  notListed: false,
  extraRace: "",
  feet: "",
  inches: "",
  heightUnit: "(in)",
  weight: 160,
  weightUnit: "(lbs)",
  pressure: 120,
  hdl: 60,
  trigl: 150,
  glucose: 90,
  a1c: 4.7,
  newWeight: 160,
  newPressure: 120,
  newHdl: 60,
  newTrigl: 150,
  newGlucose: 90,
  waist: "",
  newWaist: 30,
  diastolicBP: 70,
  newDiastolicBP: 70,
  metabolicAge: 0,
  a1cPref: 0,
  newA1cPref: 0,
  newA1c: 4.7,
};

export const RangeSliderModuleForVitalScore = [
  {
    id: "pressure",
    min: 100,
    max: 150,
    clName: "rangeSlider",
    text: "optimal range for systolic blood pressure",
    rangeStart: "40%",
    rangeWidth: "31%",
    verticalBarPosition: "40%",
  },
  {
    id: "hdl",
    min: 30,
    max: 100,
    clName: "rangeSlider hdl",
    text: "optimal range for HDL",
  },
  {
    id: "trigl",
    min: 50,
    max: 400,
    clName: "rangeSlider trigl",
    text: "optimal range for triglycerides",
  },
  {
    id: "glucose",
    min: 50,
    max: 160,
    clName: "rangeSlider glucose",
    text: "optimal range for fasting glucose",
  },
  {
    id: "weight",
    min: 50,
    max: 350,
    clName: "rangeSlider weight",
    text: "",
  },
  {
    id: "diastolicBP",
    min: 60,
    max: 100,
    clName: "rangeSlider diastolicBP",
    text: "optimal range for diastolic blood pressure",
    rangeStart: "22%",
    rangeWidth: "31%",
    verticalBarPosition: "26%",
  },
  {
    id: "waist",
    min: 15,
    max: 60,
    clName: "rangeSlider weight",
    text: "",
  },
  {
    id: "a1c",
    min: 3.4,
    max: 7.2,
    clName: "rangeSlider a1c",
    text: "optimal range for average a1c",
  },
];

/*initialize HeartFit form */
export const HeartFitInitForm = {
  age: null,
  sex: "",
  weight: 160,
  weightUnit: "(lbs)",
  timeMinute: 10,
  timeSecond: 0,
  heartRate: 140,
  newHeartRate: 140,
  newWeight: 160,
  newWeightUnit: "(lbs)",
  newTimeMinute: 10,
  newTimeSecond: 0,
  diastolicBP: 70,
  newDiastolicBP: 70,
  metabolicAge: 0,
  a1cPref: 0,
  newA1cPref: 0,
  newA1c: 4.7,
};

export const RangeSliderModuleForHeartFit = [
  {
    id: "heart",
    min: 30,
    max: 250,
    clName: "rangeSlider heart",
    text: null,
  },
  {
    id: "weight",
    min: 50,
    max: 350,
    clName: "rangeSlider heart",
    text: null,
  },
  {
    id: "timeMinute",
    min: 0,
    max: 90,
    clName: "rangeSlider heart",
    text: null,
  },
  {
    id: "timeSecond",
    min: 0,
    max: 60,
    clName: "rangeSlider heart",
    text: null,
  },
  {
    id: "time",
    min: 5,
    max: 90,
    clName: "rangeSlider heart",
    text: null,
  },
];

export const weightList = [
  { id: "Pounds", value: "Pounds ", unit: "(lbs)" },
  { id: "Kilograms", value: "Kilograms ", unit: "(kg)" },
  { id: "Gram", value: "Gram ", unit: "(g)" },
];

/* hours list */
export const hoursList = [
  { id: "0", value: "00 " },
  { id: "1", value: "01 " },
  { id: "2", value: "02 " },
  { id: "3", value: "03 " },
  { id: "4", value: "04 " },
  { id: "5", value: "05 " },
  { id: "6", value: "06 " },
  { id: "7", value: "07 " },
  { id: "8", value: "08 " },
  { id: "9", value: "09 " },
  { id: "10", value: "10 " },
  { id: "11", value: "11 " },
  { id: "12", value: "12 " },
  { id: "13", value: "13 " },
  { id: "14", value: "14 " },
  { id: "15", value: "15 " },
  { id: "16", value: "16 " },
  { id: "17", value: "17 " },
  { id: "18", value: "18 " },
  { id: "19", value: "19 " },
  { id: "20", value: "20 " },
  { id: "21", value: "21 " },
  { id: "22", value: "22 " },
  { id: "23", value: "23 " },
  { id: "24", value: "24 " },
];

/* minutes list */
export const minuteList = [
  { id: "0", value: "00" },
  { id: "1", value: "01" },
  { id: "2", value: "02" },
  { id: "3", value: "03" },
  { id: "4", value: "04" },
  { id: "5", value: "05" },
  { id: "6", value: "06" },
  { id: "7", value: "07" },
  { id: "8", value: "08" },
  { id: "9", value: "09" },
  { id: "10", value: "10" },
  { id: "11", value: "11" },
  { id: "12", value: "12" },
  { id: "13", value: "13" },
  { id: "14", value: "14" },
  { id: "15", value: "15" },
  { id: "16", value: "16" },
  { id: "17", value: "17" },
  { id: "18", value: "18" },
  { id: "19", value: "19" },
  { id: "20", value: "20" },
  { id: "21", value: "21" },
  { id: "22", value: "22" },
  { id: "23", value: "23" },
  { id: "24", value: "24" },
  { id: "25", value: "25" },
  { id: "26", value: "26" },
  { id: "27", value: "27" },
  { id: "28", value: "28" },
  { id: "29", value: "29" },
  { id: "30", value: "30" },
  { id: "31", value: "31" },
  { id: "32", value: "32" },
  { id: "33", value: "33" },
  { id: "34", value: "34" },
  { id: "35", value: "35" },
  { id: "36", value: "36" },
  { id: "37", value: "37" },
  { id: "38", value: "38" },
  { id: "39", value: "39" },
  { id: "40", value: "40" },
  { id: "41", value: "41" },
  { id: "42", value: "42" },
  { id: "43", value: "43" },
  { id: "44", value: "44" },
  { id: "45", value: "45" },
  { id: "46", value: "46" },
  { id: "47", value: "47" },
  { id: "48", value: "48" },
  { id: "49", value: "49" },
  { id: "50", value: "50" },
  { id: "51", value: "51" },
  { id: "52", value: "52" },
  { id: "53", value: "53" },
  { id: "54", value: "54" },
  { id: "55", value: "55" },
  { id: "56", value: "56" },
  { id: "57", value: "57" },
  { id: "58", value: "58" },
  { id: "59", value: "59" },
  { id: "60", value: "60" },
];
