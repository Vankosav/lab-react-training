import React from 'react';

const Rating = ({children}) => {
  
    let value = Math.round(children);
    let stars = "";
  
    if (value === 0 ) {
      stars= "☆☆☆☆☆" ;
    } 
    if (value === 1) {
      stars= "★☆☆☆☆";
    } 
     if (value === 2) {
        stars= "★★☆☆☆";
      } 
      if (value === 3) {
        stars= "★★★☆☆";
      }
      if (value === 4) {
        stars= "★★★★☆";
      } if (value === 5) {
        stars= "★★★★★";
      }
  
    return (
    <div>
        <p>{stars}</p>
      
    </div>
  );
};

export default Rating;