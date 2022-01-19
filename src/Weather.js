import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Palm Beach, Fl</h1>
      <div className="row">
        <div className="col-3">
          <div className="weather-temperature">
            <img src="images/cloud_cloudy_sun.png" alt="partly cloudy"></img>
          </div>
        </div>
        <div className="col-2">
          <p>
            <strong>18</strong>°C |°F
          </p>
        </div>
        <div className="col-3 temp">
          <form>
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 43%</li>
              <li>Wind: 8 km/h</li>
            </ul>
          </form>
        </div>
        <div className="col-4 details">
          <form>
            <ul>
              <li></li>
              <li>Sunday 1:30pm</li>
              <li>Mostly Sunny</li>
            </ul>
          </form>
        </div>
      </div>
      <div className="weahter forecast" id="forecast">
        <div className="row">
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
}
