import { TYPES } from "../Types";

export const ToggleScale = () => {
  return { type: TYPES.TOGGLE_SCALE };
};
export const SweatherDataKey = (weather) => {
  return { type: TYPES.S_WEATHER_DATA, data: weather };
};
export const ScityDataKey = (city) => {
  return { type: TYPES.S_CITY_DATA, data: city };
};
