import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnits] = useState("celsius");
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p>
          <strong>{Math.round(props.celsius)}</strong>{" "}
          <span className="units">°C |°F</span>
        </p>
      </div>
    );
  } else {
    return "F";
  }
}
