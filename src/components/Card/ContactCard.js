import React from "react";
import "./Card.css";


const ContactCard = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="frontTitle">{props.title}</div>
        </div>
        <div className="flip-card-back">
          <p className="backTitle">{props.title}</p>
          <br></br>
          <a href={props.github} target="_blank">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;