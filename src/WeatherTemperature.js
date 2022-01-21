import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnits] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
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
    return (
      <div className="WeatherTemperature">
        <p>
          <strong>{Math.round(fahrenheit())}</strong>{" "}
          <span className="units">
            <a href="/" onClick={convertToCelsius}>
              °C{" "}
            </a>
            | °F
          </span>
        </p>
      </div>
    );
  }
}
