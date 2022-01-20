import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-200"
              />
            </div>
          </div>
        </form>

        <h1>{weather.city}</h1>
        <div className="row">
          <div className="col-3">
            <div className="weather-temperature">
              <img src={weather.icon} alt={weather.description}></img>
            </div>
          </div>
          <div className="col-2">
            <div className="clearfix">
              <p>
                <strong>{Math.round(weather.temperature)}</strong>{" "}
                <small className="units">°C |°F</small>
              </p>
            </div>
          </div>
          <div className="col-3 temp">
            <form>
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind} km/h</li>
              </ul>
            </form>
          </div>
          <div className="col-4 details">
            <form>
              <ul>
                <li>
                  <FormattedDate date={weather.date} />
                </li>
                <li className="text-capitalize">
                  Description: {weather.description}
                </li>
                <li>Feels like: {weather.feelsLike}</li>
              </ul>
            </form>
          </div>
        </div>

        <div className="weahter forecast" id="forecast">
          <div className="row icons">
            <div className="col-2">
              <div className="weather-forecast-date">Mon</div>
              <img
                src="images/cloud_cloudy_sun.png"
                alt="partly cloudy"
                width="50"
              ></img>
              <div className="weather-forescast-temperature">
                <span className="weather-temp-max">72° </span>
                <span className="weather-temp-min">62°</span>
              </div>
            </div>

            <div className="col-2">
              <div className="weather-forecast-date">Tue</div>
              <img
                src="images/sun_sunny_yellow_weather_beach_icon.png"
                alt="sunny"
                width="50"
              ></img>
              <div className="weather-forescast-temperature">
                <span className="weather-temp-max">72° </span>
                <span className="weather-temp-min">62°</span>
              </div>
            </div>

            <div className="col-2">
              <div className="weather-forecast-date">Wed</div>
              <img src="images/cloud_rain.png" alt="cloudy" width="50"></img>
              <div className="weather-forescast-temperature">
                <span className="weather-temp-max">72° </span>
                <span className="weather-temp-min">62°</span>
              </div>
            </div>

            <div className="col-2">
              <div className="weather-forecast-date">Thu</div>
              <img
                src="images/cloud_snow.png"
                alt="partly cloudy"
                width="50"
              ></img>
              <div className="weather-forescast-temperature">
                <span className="weather-temp-max">72° </span>
                <span className="weather-temp-min">62°</span>
              </div>
            </div>

            <div className="col-2">
              <div className="weather-forecast-date">Fri</div>
              <img src="images/cloud_rain.png" alt="cloudy" width="50"></img>
              <div className="weather-forescast-temperature">
                <span className="weather-temp-max">72° </span>
                <span className="weather-temp-min">62°</span>
              </div>
            </div>

            <div className="col-2">
              <div className="weather-forecast-date">Sat</div>
              <img
                src="images/cloud_snow.png"
                alt="partly cloudy"
                width="50"
              ></img>
              <div className="weather-forescast-temperature">
                <span className="weather-temp-max">72° </span>
                <span className="weather-temp-min">62°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bcb3410460c28e5880f4468f2e882fc0";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
