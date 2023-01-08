import React from "react";

export default function RangeSlider(props) {
  const style = (props.value - props.min) * (100 / (props.max - props.min));
  const sliderUnit = props.unit ? props.unit : "";
  return (
    <div className={props.clName}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.stepAmount !== "" ? props.stepAmount : "1"}
        value={props.value}
        onChange={props.onChange}
        className="rangeSlider__input"
      />
      <span className="rangeSlider-min">{props.min}</span>
      <span className="rangeSlider-max">
        {props.max}{props.plus ? "+" : ""}
      </span>
      <span className="rangeSlider__optimal">{props.text}</span>
      <span
        className="rangeSlider__value"
        style={{ left: style + "%", transform: `translateX(-${style}%)` }}
      >
        {props.value}
        {sliderUnit}
      </span>
    </div>
  );
}
