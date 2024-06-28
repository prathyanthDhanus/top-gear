import React from 'react';
import "../styles/style.css";

const FlipCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
    <img src={imageSrc} alt="Card image" className="card__image" />
    <div className="card__content">
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
    </div>
  </div>
  );
};

export default FlipCard;
