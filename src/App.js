import React, { useState } from "react";
import "./AngleSelector.css";

function AngleSelector() {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (e) => {
    let value = e.target.value;

    // Remove leading zeros
    if (value.startsWith("0") && value.length > 1) {
      value = value.substring(1);
    }

    // If input is empty, set value to an empty string to allow for further typing
    if (value === "") {
      setAngle("");
      return;
    }

    // Convert to number and normalize
    value = parseInt(value);

    if (isNaN(value) || value < 0) value = 0;
    if (value > 360) value = value % 360;

    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value));
  };

  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value));
  };

  return (
    <div className="container">
      <input
        type="number"
        value={angle}
        min="0"
        max="360"
        onChange={handleInputChange}
      />
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="0"
            checked={angle === 0}
            onChange={handleRadioChange}
          />{" "}
          0°
        </label>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="45"
            checked={angle === 45}
            onChange={handleRadioChange}
          />{" "}
          45°
        </label>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="60"
            checked={angle === 60}
            onChange={handleRadioChange}
          />{" "}
          60°
        </label>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="90"
            checked={angle === 90}
            onChange={handleRadioChange}
          />{" "}
          90°
        </label>
        <label>
          <input
            type="radio"
            name="presetAngle"
            value="180"
            checked={angle === 180}
            onChange={handleRadioChange}
          />{" "}
          180°
        </label>
      </div>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
}

export default AngleSelector;
