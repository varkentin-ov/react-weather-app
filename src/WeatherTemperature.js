import React, { useState } from "react";

export default function WeatherTempUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToImperial(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToMetric(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span>
        <span class="temperature">{Math.round(props.celsius)}</span>
        <span class="unit">
          °C |{" "}
          <a href="/" onClick={convertToImperial}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span class="temperature">{Math.round(fahrenheit())}</span>
        <span class="unit">
          <a href="/" onClick={convertToMetric}>
            °C
          </a>{" "}
          | °F{" "}
        </span>
      </span>
    );
  }
}
