import React from "react";

export default function WeatherTempUnits(props) {
  return (
    <span>
      <span class="temperature">{Math.round(props.celsius)}</span>
      <span class="unit">°C</span>
    </span>
  );
}
