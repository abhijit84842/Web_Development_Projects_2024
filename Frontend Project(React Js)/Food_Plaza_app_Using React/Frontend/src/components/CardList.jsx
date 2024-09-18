import React from "react";
import style from "../CssModule/card.module.css";

const CardList = ({ foodList }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <div>
          <p>{foodList.name}</p>
          <p>{foodList.text}</p>
        </div>
      </div>
      <div className={style.price}>
        <span>${foodList.price}</span>
      </div>
    </div>
  );
};

export default CardList;
