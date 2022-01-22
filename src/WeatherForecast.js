import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [surrendedInfo, setSurrendedInfo] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setSurrendedInfo(true);
  }

  if (surrendedInfo) {
    return (
      <div className="weahterForecast" id="forecast">
        <div className="row icons">
          <div className="col-2">
            <div className="weather-forecast-date">Fri</div>
            <WeatherIcon code="01d" size={45} />
            <div className="weatherForescast-temperature">
              <span className="weather-temp-max">{forecast[0].temp.max}°</span>
              <span className="weather-temp-min">{forecast[0].temp.min}°</span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Sat</div>
            <WeatherIcon code="02d" size={45} />
            <div className="weather-forescast-temperature">
              <span className="weather-temp-max">{forecast[0].temp.max}°</span>
              <span className="weather-temp-min">{forecast[0].temp.min}°</span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Sun</div>
            <WeatherIcon code="03d" size={45} />
            <div className="weather-forescast-temperature">
              <span className="weather-temp-max">{forecast[0].temp.max}°</span>
              <span className="weather-temp-min">{forecast[0].temp.min}°</span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Mon</div>
            <WeatherIcon code="02n" size={45} />
            <div className="weather-forescast-temperature">
              <span className="weather-temp-max">{forecast[0].temp.max}°</span>
              <span className="weather-temp-min">{forecast[0].temp.min}°</span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Tue</div>
            <WeatherIcon code="10d" size={45} />
            <div className="weather-forescast-temperature">
              <span className="weather-temp-max">{forecast[0].temp.max}°</span>
              <span className="weather-temp-min">{forecast[0].temp.min}°</span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Sat</div>
            <WeatherIcon code="11d" size={45} />
            <div className="weather-forescast-temperature">
              <span className="weather-temp-max">{forecast[0].temp.max}°</span>
              <span className="weather-temp-min">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c62e463c31af5eb3180a660190b02004";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
