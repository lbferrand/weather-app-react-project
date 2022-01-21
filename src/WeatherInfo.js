import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-2">
          <div className="weather-temperature">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="clearfix">
            <p>
              <strong>{Math.round(props.data.temperature)}</strong>{" "}
              <small className="units">°C</small>
            </p>
          </div>
        </div>
        <div className="col-3 temp">
          <form>
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </form>
        </div>
        <div className="col-4 details">
          <form>
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">
                Description: {props.data.description}
              </li>
              <li>Feels like: {props.data.feelsLike}</li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
