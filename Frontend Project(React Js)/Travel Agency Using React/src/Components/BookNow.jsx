import React from "react";

// importing img
import worldtour from "../assets/images/worldtour.jpg";

// // use form hooks
// import { useForm } from "react-hook-form";

import "../CSS/booknow.css";
const BookNow = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = data;

  return (
    <div className="booknow-main-container">
      <h1>BOOK NOW</h1>
      <div className="booknow-sub-container">
        <div className="left-container">
          <img src={worldtour} alt="loading..." />
        </div>
        <div className="right-container">
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="name" />
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default BookNow;
