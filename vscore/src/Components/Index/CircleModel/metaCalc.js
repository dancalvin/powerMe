export default function calcMetaAge(age,pressure,hdl,trigl,glucose,waist,diastolicBP) 
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
    let mapped = parseFloat(diastolicBP) + parseFloat(mapperNumOne*(pressure -  diastolicBP));
    let metaAgeTemp = baseNum+(wcNum*(waist*cmConv))+(mapperNumTwo*mapped)+(fbsNum*glucose)+(tgNum*trigl)-(hdlNum*hdl)+(ageNum*age);
    return metaAgeTemp.toFixed(0);
}



