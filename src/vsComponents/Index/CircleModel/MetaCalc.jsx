import React from "react";
import { useState, useEffect } from "react";

export default function MetaCalc(
{
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
}) 
{
    const [metaAgeData, setMetaAgeData] = useState(0);
    useEffect(() => 
    {
        let baseNum = -82.688;
        let wcNum = 0.779;
        let cmConv = 2.54;
        let mapperNumTwo = 0.227;
        let fbsNum = 0.269;
        let tgNum = 0.085;
        let hdlNum = 0.481;
        let ageNum = 0.538;
        let mapperNumOne = 0.3333;

        if(typeFlag === "type1")
        {
            let mappedVar = parseFloat(newDiastolicBP) + parseFloat(mapperNumOne*(newPressure -  newDiastolicBP));
            let metaAgeTempVar = baseNum+(wcNum*(newWaist*cmConv))+(mapperNumTwo*mappedVar)+(fbsNum*newGlucose)+(tgNum*newTrigl)-(hdlNum*newHdl)+(ageNum*age);
            setMetaAgeData(metaAgeTempVar.toFixed(0));
        }
        else
        {
            let mappedVar = parseFloat(diastolicBP) + parseFloat(mapperNumOne*(pressure -  diastolicBP));
            let metaAgeTempVar = baseNum+(wcNum*(waist*cmConv))+(mapperNumTwo*mappedVar)+(fbsNum*glucose)+(tgNum*trigl)-(hdlNum*hdl)+(ageNum*age);
            setMetaAgeData(metaAgeTempVar.toFixed(0));
        }
    });
    return metaAgeData;
}