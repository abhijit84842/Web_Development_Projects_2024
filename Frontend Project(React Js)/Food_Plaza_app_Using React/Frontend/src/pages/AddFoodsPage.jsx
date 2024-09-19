import React from "react";
import "../Css/addfood.css";

const AddFoodsPage = () => {
  return (
    <div className="addFoodMainContainer">
      <h1>Add A NEW FOOD </h1>
      <div className="addSubContainer">
        <form>
          <div className="inputContainer">
            <input className="fileInput" type="file" name="image" id="" />
            <input type="text" placeholder="Enter food name.." />
            <input type="text" placeholder="Enter price.." />
            <div className="radioInput">
              <input
                type="radio"
                id="breakfast"
                name="foodtype"
                value="breakfast"
              />
              <label htmlFor="breakfast">Breakfast</label>
              <br />
              <input type="radio" id="lunch" name="foodtype" value="lunch" />
              <label htmlFor="lunch">Lunch</label> <br />
              <input type="radio" id="dinner" name="foodtype" value="dinner" />
              <label htmlFor="dinner">Dinner</label>
            </div>

            <textarea
              id="textarea"
              name="description"
              rows="4"
              cols="40"
              placeholder="Describe about this food..."
            ></textarea>
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
