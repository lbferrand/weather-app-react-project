import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  return (
    <div>
      <div className="weather-props.data-date">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className="weatherForescast-temperature">
        <span className="weather-temp-max">{maxTemperature()}°</span>
        <span className="weather-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
