import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div className="frontTitle">{props.title}</div>
        </div>
        <div class="flip-card-back">
          <p className="backTitle">{props.title}</p>
          <a href={props.deployed} target="_blank">
            Deployed Link
          </a>
          <br></br>
          <a href={props.github} target="_blank">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
