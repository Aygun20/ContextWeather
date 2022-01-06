import React from "react";
import { MainContext, useContext } from "../Context";
import { ToggleScale } from "../Store/action/Action";

export default function ToggleTemp() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(ToggleScale());
        }}
      >
        {state.scale}
      </button>
    </div>
  );
}
