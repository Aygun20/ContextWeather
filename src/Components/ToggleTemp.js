import React from "react";
import { MainContext, useContext } from "../Context";

export default function ToggleTemp() {
  const {scale, clickValue}= useContext(MainContext);

  return (
    <div>
      <button onClick={clickValue}>{scale}</button>
    </div>
  );
}
