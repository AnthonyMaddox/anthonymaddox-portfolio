import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="deployedPic">
            <img src={props.deployedPic} alt={"deployed picture"} />
          </div>
          <div className="frontTitle">{props.title}</div>
          <div className="codePic">
            <img src={props.codePic} alt={"code picture"} />
          </div>
        </div>
        <div className="flip-card-back">
          <div className="backDiv">
            <p className="backTitle">{props.title}</p>
            <div className="technologies">
              <div>{props.tech1}</div>
              <div>{props.tech2}</div>
              <div>{props.tech3}</div>
              <div>{props.tech4}</div>
              <div>{props.tech5}</div>
              <div>{props.tech6}</div>
            </div>
          </div>
          <div className="backLinksDiv">
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
    </div>
  );
};

export default Card;
