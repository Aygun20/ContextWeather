import React, { useState, useEffect, useReducer } from "react";

import "./App.css";
import Temperature from "./Components/Temperature";
import ToggleTemp from "./Components/ToggleTemp";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Select } from "antd";
import WindHumid from "./Components/WindHumid";
import Main from "./Components/Main";
import { MainContext } from "./Context";
import { SweatherDataKey } from "./Store/action/Action";
import { ScityDataKey } from "./Store/action/Action";
import { initialState, reducer } from "./Store/Reducer";
import SunRiseSet from "./Components/SunRiseSet";

const { Option } = Select;

function onSearch(val) {
  console.log("search:", val);
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchCityData() {
    fetch(
      `https://countriesnow.space/api/v0.1/countries/capital?` +
        new URLSearchParams({
          appid: "520dbdfb08200362a1c2e2dda2c07e0b",
        })
    )
      .then((response) => response.json())
      .then((city) => {
        dispatch(ScityDataKey(city));
      });
  }

  function fetchWeatherData(cityName) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?` +
        new URLSearchParams({
          appid: "520dbdfb08200362a1c2e2dda2c07e0b",
          q: cityName,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(SweatherDataKey(data));
      });
  }

  useEffect(() => {
    fetchWeatherData("Berlin");
    fetchCityData("Berlin");
    console.log("didmount success");
  }, []);

  const shareContext = { state, dispatch };

  return (
    <MainContext.Provider value={shareContext}>
      <div className="container">
        <div className="header">
          <ToggleTemp />
          <Select
            showSearch
            placeholder="Select a city"
            optionFilterProp="children"
            onChange={(value) => fetchWeatherData(value)}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {state.cityData &&
              state.cityData.data
                .map((item, index) => item.capital)
                .map((item, index) => (
                  <Option value={item} key={index}>
                    {item}
                  </Option>
                ))}
          </Select>
        </div>

        {typeof state.weatherData.main === "undefined" ? (
          <div>
            <p>enter city</p>
          </div>
        ) : (
          <div className="weather-data">
            <SunRiseSet />
            <Row>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Temperature />
              </Col>

              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <h2 className="white">{state.weatherData.name}</h2>
                <h1 className="white">
                  {state.scale === "K"
                    ? Math.round(state.weatherData.main.temp) - 273
                    : Math.round(state.weatherData.main.temp)}
                  {state.scaleType}
                </h1>
                <Main />
              </Col>

              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <WindHumid />
              </Col>
            </Row>
          </div>
        )}
      </div>
    </MainContext.Provider>
  );
}

export default App;
