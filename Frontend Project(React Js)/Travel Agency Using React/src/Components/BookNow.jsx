import React from "react";

import worldtour from "../assets/images/worldtour.jpg";

import "../CSS/booknow.css";
const BookNow = () => {
  return (
    <div className="booknow-main-container">
      <h1>BOOK NOW</h1>
      <div className="booknow-sub-container">
        <div className="left-container">
          <img src={worldtour} alt="loading..." />
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
};

export default BookNow;
