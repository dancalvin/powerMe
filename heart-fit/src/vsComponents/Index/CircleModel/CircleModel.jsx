import React from "react";
import { useState, useEffect } from "react";
export default function CircleModel(props) {
  const twoPi = 3.1415926535 * 2;
  const outerCircumference = 180 * twoPi;
  const innerCircumference = 135 * twoPi;

  const innerDash = innerCircumference * ((100 - props.actualAge) / 100);
  const outerDash = outerCircumference * ((100 - props.metabolicAge) / 100);

  const innerStyle = {
    strokeDasharray: innerDash + " " + innerCircumference,
    strokeDashoffset: 0,
  };

  return (
    <div className="circleDisplay">
      <div className="partOne">
        <svg className="svg-pi svg-pi-outer">
          <circle className="svg-pi-track" />
          <circle
            className="svg-pi-indicator"
            style={{
              strokeDashoffset: outerDash + "px",
              strokeDasharray: outerCircumference + "px",
            }}
          />
          ";
        </svg>
      </div>

      <div className="partTwo">
        <svg className="svg-pi svg-pi-inner">
          <circle className="svg-pi-track" />
          <circle
            className="svg-pi-indicator"
            style={{
              strokeDashoffset: innerDash + "px",
              strokeDasharray: innerCircumference + "px",
            }}
          />
          ";
        </svg>
      </div>

      <div className="partThree">
        <span>
          {props.metabolicAge}/{props.actualAge}
        </span>
      </div>
    </div>
  );
}
