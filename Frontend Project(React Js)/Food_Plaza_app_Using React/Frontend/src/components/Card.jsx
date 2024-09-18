import React from "react";
import style from "../CssModule/card.module.css";
import CardList from "./CardList";

const Card = ({ food }) => {
  // console.log(food);
  return (
    <div className={style.subContainer}>
      <div className={style.mainContainer}>
        {food?.map((list) => (
          <CardList key={list.name} foodList={list} />
        ))}
      </div>
    </div>
  );
};

export default Card;
