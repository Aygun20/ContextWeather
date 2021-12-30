import React, { useState, useEffect } from "react";

import "./App.css";
import Weather from "./Components/Weather";
import Temperature from "./Components/Temperature";
import ToggleTemp from "./Components/ToggleTemp";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Select } from "antd";
import WindHumid from "./Components/WindHumid";
import Main from "./Components/Main";
import { MainContext } from "./Context";
const { Option } = Select;

function onSearch(val) {
  console.log("search:", val);
}

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [cityData, setCityData] = useState(null);
  const [scale, setScale] = useState("K");
  const [scaleType, setScaleType] = useState("C");

  const data = {
    weatherData,
    cityData,
    scale,
    scaleType,
    clickValue,
  };

  function fetchCityData() {
    fetch(
      `https://countriesnow.space/api/v0.1/countries/capital?` +
        new URLSearchParams({
          appid: "520dbdfb08200362a1c2e2dda2c07e0b",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setCityData(data);
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
      .then((cityName) => {
        setWeatherData(cityName);
      });
  }

  useEffect(() => {
    fetchWeatherData("Berlin");
    fetchCityData("Berlin");
    console.log("didmount success");
  }, []);

  function clickValue(min, max) {
    if (scale === "K") {
      setScale("C");
      setScaleType("K");
    } else {
      setScale("K");
      setScaleType("C");
    }
  }

  return (
    <MainContext.Provider value={data}>
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
            {cityData &&
              cityData.data
                .map((item, index) => item.capital)
                .map((item, index) => (
                  <Option value={item} key={index}>
                    {item}
                  </Option>
                ))}
          </Select>
        </div>

        {typeof weatherData.main === "undefined" ? (
          <div>
            <p>enter city</p>
          </div>
        ) : (
          <div className="weather-data">
            <Weather />
            <Row>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Temperature />
              </Col>

              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <h2 className="white">{weatherData.name}</h2>
                <h1 className="white">
                  {scale === "K"
                    ? Math.round(weatherData.main.temp) - 273
                    : Math.round(weatherData.main.temp)}
                  {scaleType}
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
