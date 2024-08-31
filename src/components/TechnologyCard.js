import React from 'react';
import './TechnologyCard.css';

function TechnologyCard({ title, description, icon, children, isCenter }) {
  return (
    <div className={`technology-card ${isCenter ? 'center-card' : ''}`}>
      <div className="technology-header">
        <div className="icon">{icon}</div>
        <h3 className="title">{title}</h3>
      </div>
      <p className="description">{description}</p>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default TechnologyCard;
