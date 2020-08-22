import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">Poisonous Plants</div>
        <div class="flip-card-back">
          <h1>Poisonous Plants</h1>
          <p>Link to site</p>
          <p>Link to github</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
