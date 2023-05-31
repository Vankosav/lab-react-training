import React from 'react';


function CreditCard(details) {
    
    const lastFour = details.number.slice(details.number.length-4,details.number.length);
    
    return (
      <div className="ccdiv" style={{
          backgroundColor: `${details.bgColor}`, color: `${details.color}`
        }}>
  
        
  
        <p className="cardnumbers">•••• •••• •••• {lastFour}</p>
        <p className="smallercard">Expires {details.expirationMonth}/{details.expirationYear}    {details.bank}</p>
        <p className="smallercard">{details.owner}</p>
      </div>
    )
  }

export default CreditCard;

