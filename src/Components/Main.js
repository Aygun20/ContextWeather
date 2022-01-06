import React from "react";
import { MainContext, useContext } from "../Context";
import cloud from "../img/cloud.svg";

export default function Main() {
  const { state } = useContext(MainContext);
  const { weatherData } = state;
  return (
    <div className="main">
      <img src={cloud} />
      <h3 className="white">
        {weatherData.weather && weatherData.weather[0].main}
      </h3>
    </div>
  );
}
