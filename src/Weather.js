import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "bcb3410460c28e5880f4468f2e882fc0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityUpdate}
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
        <WeatherInfo data={weather} />

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
    search();
    return "Loading..";
  }
}
