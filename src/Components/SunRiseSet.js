import React from "react";
import { MainContext, useContext } from "../Context";
import sunrise from "../img/sunrise.png";
import sunset from "../img/sunset.png";

export default function SunRiseSet() {
  const { state } = useContext(MainContext);
  const { weatherData } = state;
  const d = new Date();

  return (
    <div className="sunriseset">
      <div className="sunrise">
        <img src={sunrise} style={{ width: "3rem" }} />
        <span>
          {d.toUTCString(weatherData.sys && weatherData.sys.sunrise * 1000)}
        </span>
      </div>

      <div className="sunrise">
        <img src={sunset} style={{ width: "3rem" }} />
        <span>
          {d.toUTCString(weatherData.sys && weatherData.sys.sunset * 1000)}
        </span>
      </div>
    </div>
  );
}
