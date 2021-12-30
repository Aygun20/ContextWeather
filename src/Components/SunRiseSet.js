import React from "react";
import { MainContext, useContext } from "../Context";
import sunrise from "../img/sunrise.png";
import sunset from "../img/sunset.png";

export default function SunRiseSet() {
  const { weatherData } = useContext(MainContext);
  const d = new Date();

  return (
    <div className="sunriseset">
      <div className="sunrise">
        <img src={sunrise} style={{ width: "3rem" }} />
        <span>{d.toUTCString(weatherData.sys.sunrise)}</span>
      </div>

      <div className="sunrise">
        <img src={sunset} style={{ width: "3rem" }} />
        <span>{d.toUTCString(weatherData.sys.sunset)}</span>
      </div>
    </div>
  );
}
