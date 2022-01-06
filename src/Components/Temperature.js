import React from "react";
import { MainContext, useContext } from "../Context";

export default function Temperature() {
  const { state } = useContext(MainContext);
  const { weatherData, scale, scaleType } = state;
  return (
    <div>
      <h3 className="white">
        <span>
          <i className="fas fa-temperature-high"></i>
        </span>
        Max:{" "}
        {scale === "K"
          ? Math.round(weatherData.main && weatherData.main.temp_max) - 273
          : Math.round(weatherData.main && weatherData.main.temp_max)}
        {scaleType}
      </h3>
      <h3 className="white">
        <span>
          <i className="fas fa-temperature-low"></i>
        </span>
        Min:{" "}
        {scale === "K"
          ? Math.round(weatherData.main && weatherData.main.temp_max) - 273
          : Math.round(weatherData.main && weatherData.main.temp_max)}
        {scaleType}
      </h3>
    </div>
  );
}
