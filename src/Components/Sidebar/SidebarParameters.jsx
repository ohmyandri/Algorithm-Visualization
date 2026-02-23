import React, { useState } from "react";

export default function SidebarParameters({
  sliderValue,
  handleChange,
  label,
  step,
  minValue,
  maxValue,
}) {
  return (
    <div className="parameterSlider">
      <section className="parameterInfo">
        <label>{label}: </label>
        <input
          type="number"
          value={sliderValue}
          onChange={(e) => {
            handleChange(Number(e.target.value));
          }}
          step={step}
          min={minValue}
          max={maxValue}
        ></input>
      </section>

      <input
        type="range"
        step={step}
        min={minValue}
        max={maxValue}
        value={sliderValue}
        onChange={(e) => {
          handleChange(Number(e.target.value));
        }}
      />
    </div>
  );
}
