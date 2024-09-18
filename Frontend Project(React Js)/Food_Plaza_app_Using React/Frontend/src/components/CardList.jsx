import React from "react";
import "../Css/card.css";

const CardList = ({ foodList }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div>
          <p>{foodList.name}</p>
          <p>{foodList.text}</p>
        </div>
      </div>
      <div className="price">
        <span>${foodList.price}</span>
      </div>
    </div>
  );
};

export default CardList;
