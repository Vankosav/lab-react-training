import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const color = `rgb(${r},${g},${b})`;
  return (
   
      <div
        style={{
          backgroundColor: color,
        }}
      >
        Colors
      </div>
      
   
  );
};

export default BoxColor;
