import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div class="row">
        <div class="column">
          <div class="card">
            <span>{props.icon}</span>
            <h6 style={{ color: "black" }}>{props.name}</h6>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
