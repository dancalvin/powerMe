import React from "react";
import { useState, useEffect } from "react";

export default function MetabolicAgeCalculator(
{
  age,
  pressure,
  hdl,
  trigl,
  glucose,
  waist,
  diastolicBP,
}) 
{
  const [mapped, setMapped] = useState(1);
  const [metaAgeTemp, setMetaAgeTemp] = useState(1);
  // <div>BMI:{bmi.toFixed(0)}<br></br>{((percentile -100)*-1).toFixed(0)}%</div>

  useEffect(() => {
    
    let baseNum = -82.688;
    let wcNum = 0.779;
    let cmConv = 2.54;
    let mapperNumTwo = 0.227;
    let fbsNum = 0.269;
    let tgNum = 0.085;
    let hdlNum = 0.481;
    let ageNum = 0.538;
    let mapperNumOne = 0.3333;
    setMapped(parseFloat(diastolicBP) + parseFloat(mapperNumOne*(pressure -  diastolicBP)));
    setMetaAgeTemp(baseNum+(wcNum*(waist*cmConv))+(mapperNumTwo*mapped)+(fbsNum*glucose)+(tgNum*trigl)-(hdlNum*hdl)+(ageNum*age));
  });
  return <>{metaAgeTemp.toFixed(0)}</>;


  
}

