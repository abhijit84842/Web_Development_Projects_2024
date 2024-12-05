import React from "react";

// importing img
import worldtour from "../assets/images/worldtour.jpg";

// // use form hooks
import { useForm } from "react-hook-form";

import "../CSS/booknow.css";
const BookNow = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="booknow-main-container">
      <h1>Book Now</h1>
      <div className="booknow-sub-container">
        <div className="left-container">
          <img src={worldtour} alt="loading..." />
        </div>
        <div className="right-container">
          <h1>Book Your Tour</h1>
          <form className="formTag" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputfiled">
              <input
                type="text"
                {...register("name", {
                  required: "this filed is required..",
                })}
                placeholder="Enter your name.."
              />
              {errors.name && (
                <p className="errorMsgForm">{errors.name.message}</p>
              )}
              <input
                type="text"
                {...register("where", {
                  required: "this field is required..",
                })}
                placeholder="Write your current location.."
              />
              {errors.where && (
                <p className="errorMsgForm">{errors.where.message}</p>
              )}
              <input
                type="text"
                {...register("to", {
                  required: "this filed is required..",
                })}
                placeholder="Write your destination.."
              />
              {errors.to && <p className="errorMsgForm">{errors.to.message}</p>}
              <input
                type="number"
                {...register("numOfPerson", {
                  required: "this filed is required",
                  min: {
                    value: 1,
                    message: "minimum 1 person is required..",
                  },
                })}
                placeholder="Choose number of person.."
              />
              {errors.numOfPerson && (
                <p className="errorMsgForm">{errors.numOfPerson.message}</p>
              )}

              <div className="phno-box-main">
                <div className="phno-box-sub">
                  <div className="country-code">+91</div>

                  <input
                    className="ph-input-field"
                    type="tel"
                    {...register("phno", {
                      required: "ph no is required..",
                      minLength: {
                        value: 10,
                        message: "number should be 10 digits...",
                      },
                      maxLength: {
                        value: 10,
                        message: "number should be 10 digits ",
                      },
                    })}
                    placeholder="enter your ph number.."
                  />
                </div>

                <div className="ph-error-msg">
                  {errors.phno && (
                    <p className="errorMsgForm">{errors.phno.message}</p>
                  )}
                </div>
              </div>
              <div className="arrivals-box">
                <label htmlFor="Arrivals" className="arrivals">
                  Arrivals
                </label>
                <input
                  type="date"
                  {...register("arrivalsDate", {
                    required: "plz enter the date..",
                  })}
                />
                {errors.arrivalsDate && (
                  <p className="errorMsgForm">{errors.arrivalsDate.message}</p>
                )}
              </div>

              <div className="leaving-box">
                <label htmlFor="leaving" className="leaving">
                  Leaving
                </label>
                <input
                  type="date"
                  {...register("leavingDate", {
                    required: "plz enter the date..",
                  })}
                />
                {errors.leavingDate && (
                  <p className="errorMsgForm">{errors.leavingDate.message}</p>
                )}
              </div>
            </div>
            <div className="submit-button">
              <button type="submit" className="book-button">
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
