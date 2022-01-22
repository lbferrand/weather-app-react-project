import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay.js";

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
            <WeatherForecastDay data={forecast[0]} />
          </div>

          <div className="col-2">
            <WeatherForecastDay data={forecast[1]} />
          </div>

          <div className="col-2">
            <WeatherForecastDay data={forecast[2]} />
          </div>

          <div className="col-2">
            <WeatherForecastDay data={forecast[3]} />
          </div>

          <div className="col-2">
            <WeatherForecastDay data={forecast[4]} />
          </div>

          <div className="col-2">
            <WeatherForecastDay data={forecast[5]} />
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
