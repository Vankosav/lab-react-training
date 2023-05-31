import React from 'react';

const Greetings = ({ lang, children }) => {
  let greeting = "";
  
  if (lang === "ser") {
    greeting = "Zdravo" ;
  } else if (lang === "hr") {
    greeting = "Bok";
  }

  return (
    
      <div>
        <p>{greeting} {children}</p>
      </div>
  
  );
};

export default Greetings;