import React from "react";
import City from "./City";
import SunRiseSet from "./SunRiseSet";

export default function Weather(props) {
  return (
    <div>
      <City />
      <SunRiseSet />
    </div>
  );
}
