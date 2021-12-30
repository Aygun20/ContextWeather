import React from "react";
import { MainContext, useContext } from "../Context";
import cloud from "../img/cloud.svg";

export default function Main() {
  const {weatherData}= useContext(MainContext);
  return (
    <div className="main">
      <img src={cloud} />
      <h3 className="white">{weatherData.weather[0].main}</h3>
    </div>
  );
}
