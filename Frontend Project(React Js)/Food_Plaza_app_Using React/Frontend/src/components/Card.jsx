import React from "react";
import style from "../CssModule/card.module.css";

const Card = () => {
  return (
    <div className={style.subContainer}>
      <div className={style.mainContainer}>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <img src="/egg.png" alt="" />
            <div>
              <p>Boil Egg</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <div className={style.price}>
            <span>$100</span>
          </div>
        </div>

        <div className={style.cardContainer}>
          <div className={style.card}>
            <img src="/egg.png" alt="" />
            <div>
              <p>Boil Egg</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <div className={style.price}>
            <span>$100</span>
          </div>
        </div>

        <div className={style.cardContainer}>
          <div className={style.card}>
            <img src="/egg.png" alt="" />
            <div>
              <p>Boil Egg</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <div className={style.price}>
            <span>$100</span>
          </div>
        </div>

        <div className={style.cardContainer}>
          <div className={style.card}>
            <img src="/egg.png" alt="" />
            <div>
              <p>Boil Egg</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <div className={style.price}>
            <span>$100</span>
          </div>
        </div>

        <div className={style.cardContainer}>
          <div className={style.card}>
            <img src="/egg.png" alt="" />
            <div>
              <p>Boil Egg</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <div className={style.price}>
            <span>$100</span>
          </div>
        </div>

        <div className={style.cardContainer}>
          <div className={style.card}>
            <img src="/egg.png" alt="" />
            <div>
              <p>Boil Egg</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <div className={style.price}>
            <span>$100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
