import { TYPES } from "./Types";
export const initialState = {
  scale: "K",
  count: 0,
  scaleType: "C",
  weatherData: {},
  cityData: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case TYPES.TOGGLE_SCALE:
      return {
        ...state,
        scale: state.scale === "C" ? "K" : "C",
        scaleType: state.scaleType === "C" ? "K" : "C",
      };
    case TYPES.S_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.data,
      };
    case TYPES.S_CITY_DATA:
      return {
        ...state,
        cityData: action.data,
      };
    default:
      return state;
  }
}
