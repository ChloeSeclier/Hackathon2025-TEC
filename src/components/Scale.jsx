import React, { useContext } from 'react';
import { ScaleContext } from '../components/scaleContext';
import '../css/scale.css';

function Scale() {
  const { value, handleSliderChange } = useContext(ScaleContext);

  const max = 5;
  const bulletPosition = (value / max) * 578;

  return (
    <div className="container">
      <div className="range-slider">
        <span
          id="rs-bullet"
          className="rs-label"
          style={{ left: `${bulletPosition}px` }}
        >
          {value}
        </span>
        <input
          id="rs-range-line"
          className="rs-range"
          type="range"
          value={value}
          min="0"
          max={max}
          onInput={(event) => handleSliderChange(event.target.value)}
        />
      </div>

      <div className="box-minmax">
        <span>En forme 💪</span>
        <span>T'es mort 🧟</span>
      </div>
    </div>
  );
}

export default Scale;
