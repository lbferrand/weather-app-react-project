import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnits] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("Fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p>
          <strong>{Math.round(props.celsius)}</strong>{" "}
          <span className="units">
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </p>
      </div>
    );
  } else {
    return "F";
  }
}
