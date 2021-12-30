import React from "react";
import { MainContext, useContext } from "../Context";

export default function WindHumid() {
  const { weatherData } = useContext(MainContext);

  return (
    <div className="white">
      <p>Wind: {weatherData.wind.speed} m/s</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
    </div>
  );
}
