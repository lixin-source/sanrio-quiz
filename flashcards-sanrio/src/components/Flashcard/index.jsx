import './style.css'; // You can keep the styles in a separate CSS file
import React, { useState } from 'react';
const Flashcard = ({ front, back}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flip}>
      <div className="front">
        <h4>{front}</h4>
      </div>
      <div className="back">
        <h4>{back}</h4>
      </div>
    </div>
  );
};

export default Flashcard;
