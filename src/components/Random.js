import React from 'react';

const Random = ({ min, max }) => {
    const result =  Math.floor(Math.random() * (max - min) + min);
    return (
      <div>
        <p>Random value between {min} and {max} is {result}</p>
      </div>
    )
    
   
};

export default Random;