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
    // Create a new FormData object
    const formData = new FormData();

    // Append the image file to the FormData object
    formData.append("image", data.image[0]); // Get the first file in case multiple files are selected

    // Append other fields in formData
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("type", data.type);
    formData.append("description", data.description);

    // console.log(formData);       // The FormData object is not a plain JavaScript object, and its data is not immediately visible when you log it.

    // to see the formData object
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    let res = await fetch("http://localhost:3002/api/addfood", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      credentials: "include", // Include cookies in the request
      body: formData, // send formData to backend
    });

    let result = await res.json();
    console.log(result);
    if (result.success == false) {
      alert(result.msg);
    } else {
      alert(result.msg);
    }
  };
  return (
    <div className="addFoodMainContainer">
      <h1>Add A NEW FOOD </h1>
      <div className="addSubContainer">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="inputContainer">
            <input // file input for image
              className="fileInput"
              type="file"
              id="image"
              accept="image/*" // Accept only image files
              {...register("image", { required: "plz upload an image" })}
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
