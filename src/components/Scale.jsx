import React, { useContext } from 'react';
import { ScaleContext } from '../components/scaleContext';
import '../css/scale.css';

function Scale() {
  const { value, handleSliderChange } = useContext(ScaleContext);

  const max = 5;
  const bulletPosition = (value / max) * 100;

  return (
    <div className="container-scale">
      <div className="range-slider">
        <span
          // id="rs-bullet"
          className="rs-numberScale"
          style={{ left: `${bulletPosition}%` }}
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
        <p> En forme 💪</p>
        <p>T'es mort 🧟</p>
      </div>
    </div>
  );
}

export default Scale;
