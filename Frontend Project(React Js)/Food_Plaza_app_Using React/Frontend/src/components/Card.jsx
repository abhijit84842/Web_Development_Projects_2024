import React, { useEffect, useState } from "react";
import "../Css/card.css";

// import CardList from "./CardList";

const Card = () => {
  const [foodData, setFoodData] = useState(null);

  // // fetch food api
  const fetchFood = async () => {
    let res = await fetch("http://localhost:3000/api/fooddata");
    let result = await res.json();

    const foodWithImages = result.data.map((food) => {
      if (food.image) {
        const base64Image = arrayBufferToBase64(food.image.data);
        // console.log(base64Image);
        return { ...food, imageSrc: `data:image/jpeg;base64,${base64Image}` };
      }
      return food;
    });

    setFoodData(foodWithImages);
  };

  // Helper function to convert buffer data to Base64 string
  // Explanation: -> This function takes the buffer array from the JSON (e.g., food.image.data) and converts it to a Base64 string using Uint8Array and btoa().
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer); // Convert buffer to Uint8Array
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary); // Convert binary string to Base64
  };
  // useEffect(() => {
  //   fetchFood();
  // }, []);
  // console.log(foodData);

  return (
    <div className="CardSubContainer">
      <div className="mainContainer">
        {foodData?.map((list) => (
          <div className="cardContainer" key={list._id}>
            <div className="card">
              <img
                src={list.imageSrc}
                // alt="loading"
              />
              <div>
                <p>{list.name}</p>
                <p>{list.description}</p>
              </div>
            </div>
            <div className="price">
              <span>${list.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
