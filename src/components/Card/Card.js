import React from "react";
import "./Card.css";


const Card = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="frontTitle">{props.title}</div>
        </div>
        <div className="flip-card-back">
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
