import React from 'react';
import '../css/InfoBlock.css';
function InfoBlock({ number, description }) {
  return (
    <div className="info-block">
      <div className="info-number">{number}</div>
      <p>{description}</p>
    </div>
  );
}

export default InfoBlock;
