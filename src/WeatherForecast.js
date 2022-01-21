import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weahterForecast" id="forecast">
      <div className="row icons">
        <div className="col-2">
          <div className="weather-forecast-date">Fri</div>
          <WeatherIcon code="01d" size={45} />
          <div className="weatherForescast-temperature">
            <span className="weather-temp-max">24° </span>
            <span className="weather-temp-min">22°</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Sat</div>
          <WeatherIcon code="02d" size={45} />
          <div className="weather-forescast-temperature">
            <span className="weather-temp-max">23° </span>
            <span className="weather-temp-min">20°</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Sun</div>
          <WeatherIcon code="03d" size={45} />
          <div className="weather-forescast-temperature">
            <span className="weather-temp-max">21° </span>
            <span className="weather-temp-min">17°</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Mon</div>
          <WeatherIcon code="02n" size={45} />
          <div className="weather-forescast-temperature">
            <span className="weather-temp-max">20° </span>
            <span className="weather-temp-min">16°</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Tue</div>
          <WeatherIcon code="10d" size={45} />
          <div className="weather-forescast-temperature">
            <span className="weather-temp-max">27° </span>
            <span className="weather-temp-min">19°</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Sat</div>
          <WeatherIcon code="11d" size={45} />
          <div className="weather-forescast-temperature">
            <span className="weather-temp-max">72° </span>
            <span className="weather-temp-min">62°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
