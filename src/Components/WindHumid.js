import React from "react";
import { MainContext, useContext } from "../Context";

export default function WindHumid() {
  const { state } = useContext(MainContext);
  const { weatherData } = state;
  return (
    <div className="white">
      <p>Wind: {weatherData.wind && weatherData.wind.speed} m/s</p>
      <p>Humidity: {weatherData.main && weatherData.main.humidity} %</p>
    </div>
  );
}
