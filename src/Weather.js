import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Palm Beach, Fl</h1>

      <div className="row">
        <div className="col-2 temp">
          <img src="https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/cloudy-1024.png"></img>
          <form>
            <ul>
              <li>
                <strong>18</strong> °C | °F
              </li>
            </ul>
          </form>
        </div>
        <div className="col-4 temp">
          <form>
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 43%</li>
              <li>Wind: 8 km/h</li>
            </ul>
          </form>
        </div>
        <div className="col-6 details">
          <form>
            <ul>
              <li>Tuesday 1:30pm</li>
              <li>Mostly Sunny</li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
