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

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="forecastBorder">
      <div className="weather-forecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className="weatherForescast-temperature">
        <span className="weather-temp-max">{maxTemperature()}°</span>
        <span className="weather-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
