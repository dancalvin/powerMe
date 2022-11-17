import React from "react";

export default function CircleModel(props) {

  const outerCircumference = 180 * 2 * 3.141592;
  const outerDash = outerCircumference * ((100 - props.metabolicAge)/100);
  const innerCircumference = 135 * 2 * 3.141592;
  const innerDash = innerCircumference * ((100 - props.actualAge)/100);

  const innerStyle = 
  {
    strokeDasharray: innerDash + " " + innerCircumference,
    strokeDashoffset: 0,
  }

  return (
    <div className="circleDisplay">
      
      <div className="partOne">
        <svg className="svg-pi svg-pi-outer">
        <circle className="svg-pi-track" />
        <circle className="svg-pi-indicator" style={{strokeDashoffset: outerDash  + "px" , strokeDasharray: outerCircumference + 'px'}} />";
        </svg>
      </div>

      <div className="partTwo">
        <svg className="svg-pi svg-pi-inner">
        <circle className="svg-pi-track" />
        <circle className="svg-pi-indicator" style={{strokeDashoffset: innerDash  + "px" , strokeDasharray: innerCircumference + 'px'}} />";
        </svg>
      </div>
      
      <div className="partThree">
      <span>{props.metabolicAge}/{props.actualAge}</span>
      </div>

    </div>
  );
}



