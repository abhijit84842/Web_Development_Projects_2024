import React from "react";
import "../Css/card.css";

import CardList from "./CardList";

const Card = ({ food }) => {
  // console.log(food);
  return (
    <div className="CardSubContainer">
      <div className="mainContainer">
        {food?.map((list) => (
          <CardList key={list._id} foodList={list} />
        ))}
      </div>
    </div>
  );
};

export default Card;
