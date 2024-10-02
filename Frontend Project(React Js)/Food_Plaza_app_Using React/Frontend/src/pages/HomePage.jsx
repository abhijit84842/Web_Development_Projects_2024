import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../Css/page.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [foodData, setFoodData] = useState();
  const [foodType, setFoodType] = useState();
  // const [loadBar, setLoadBar] = useState(false);

  // Fetch Foods API
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

    // Store in State
    setFoodData(foodWithImages);
    setFoodType(foodWithImages);
  };

  // Filter all food
  const filterAll = () => {
    setFoodType(foodData);
  };

  // Filter BreakFast
  const filterBreakFast = () => {
    // filtering breakfast
    let breakfastItems = foodData?.filter((item) => item.type === "breakfast");

    setFoodType(breakfastItems);
  };

  // Filter Lunch Food
  const filterLunch = () => {
    // filtering lunch
    let lunchItems = foodData?.filter((item) => {
      return item.type === "lunch";
    });

    setFoodType(lunchItems);
  };

  // Filter Dinner Items
  const filterDinner = () => {
    // filtering dinner
    let dinnerItems = foodData?.filter((item) => item.type === "dinner");

    setFoodType(dinnerItems);
  };

  // Search Food
  const searchFood = (e) => {
    let inputName = e.target.value.toLowerCase();
    let searchItem = foodData?.filter((items) =>
      items.name.toLowerCase().includes(inputName)
    );
    setFoodType(searchItem);
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

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div className="stopContainer">
      <div className="headingAndAdmin">
        <h1 className="h1Tag">Welcome To Food Plaza</h1>
        <div className="adminlogin">
          <Link to="/admin">Admin</Link>
        </div>
      </div>

      <div className="logoAndSearch">
        <div className="logo">
          <img src="/Food Plaza.png" alt="loading.." />
        </div>
        <div className="search">
          <input
            onChange={searchFood}
            type="text"
            placeholder="Search food.."
          />
        </div>
      </div>
      <nav>
        <button onClick={() => filterAll()}>All</button>
        <button onClick={() => filterBreakFast()}>Breakfast</button>
        <button onClick={() => filterLunch()}>Lunch</button>
        <button onClick={() => filterDinner()}>Dinner</button>
      </nav>
      <Card foodtype={foodType} />
    </div>
  );
};

export default HomePage;
