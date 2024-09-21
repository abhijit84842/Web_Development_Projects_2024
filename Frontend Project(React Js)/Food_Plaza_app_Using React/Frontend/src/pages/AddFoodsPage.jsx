import React from "react";
import "../Css/addfood.css";

// useFrom hook
import { useForm } from "react-hook-form";

const AddFoodsPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let res = await fetch("http://localhost:3000/api/addfood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include cookies in the request
      body: JSON.stringify(data),
    });
  };
  return (
    <div className="addFoodMainContainer" onSubmit={handleSubmit(onSubmit)}>
      <h1>Add A NEW FOOD </h1>
      <div className="addSubContainer">
        <form>
          <div className="inputContainer">
            <input
              className="fileInput"
              type="file"
              {...register("image", { required: "image is required" })}
            />
            {errors.image && (
              <p className="errorMsgForm">{errors.image.message}</p>
            )}
            <input
              type="text"
              {...register("name", { required: "Food name is required.." })}
              placeholder="Enter food name.."
            />
            {errors.name && (
              <p className="errorMsgForm">{errors.name.message}</p>
            )}
            <input
              type="text"
              {...register("price", { required: "Price is required" })}
              placeholder="Enter price.."
            />
            {errors.price && (
              <p className="errorMsgForm">{errors.price.message}</p>
            )}
            <div className="radioInput">
              <input
                type="radio"
                id="breakfast"
                {...register("type")}
                value="breakfast"
              />
              <label htmlFor="breakfast">Breakfast</label>
              <br />
              <input
                type="radio"
                id="lunch"
                {...register("type")}
                value="lunch"
              />
              <label htmlFor="lunch">Lunch</label> <br />
              <input
                type="radio"
                id="dinner"
                {...register("type")}
                value="dinner"
              />
              <label htmlFor="dinner">Dinner</label>
            </div>

            <textarea
              id="textarea"
              {...register("description")}
              rows="4"
              cols="40"
              placeholder="Describe about this food..."
            ></textarea>
            {errors.description && (
              <p className="errorMsgForm">{errors.description.message}</p>
            )}
            <button className="submitButton" type="submit">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodsPage;
