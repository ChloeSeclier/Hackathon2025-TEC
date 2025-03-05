import React, { useState } from 'react';
import '../css/scale.css';

function Scale() {
  // Valeur du slider
  const [value, setValue] = useState(0);
  // Calculer la position du bullet
  const max = 5;
  const bulletPosition = (value / max) * 578; // Calcul de la position du bullet

  const handleSliderChange = (event) => {
    setValue(event.target.value); // Mettre à jour la valeur du slider
  };

  return (
    <div className="container">
      <div
        className="range-slider"
        //   style={{ position: 'relative' }}
      >
        {/* Afficher la valeur dynamique du bullet */}
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
          onInput={handleSliderChange}
        />
      </div>

      <div className="box-minmax">
        <span>0</span>

        <span>{max}</span>
      </div>
    </div>
  );
}

export default Scale;
