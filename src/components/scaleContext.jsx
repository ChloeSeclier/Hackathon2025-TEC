import React, { createContext, useState } from 'react';

const ScaleContext = createContext();

const ScaleProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <ScaleContext.Provider value={{ value, handleSliderChange }}>
      {children}
    </ScaleContext.Provider>
  );
};

export { ScaleContext, ScaleProvider };
