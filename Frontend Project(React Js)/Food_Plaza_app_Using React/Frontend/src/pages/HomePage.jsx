import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../Css/page.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [foodData, setFoodData] = useState();

  const [Breakfast, setBreakfast] = useState();
  const [Lunch, setLunch] = useState();
  const [Dinner, setDinner] = useState();

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

    // filtering breakfast
    let breakfastItems = foodWithImages.filter(
      (item) => item.type === "breakfast"
    );
    setBreakfast(breakfastItems);

    // filtering lunch
    let lunchItems = foodWithImages.filter((item) => {
      return item.type === "lunch";
    });
    setLunch(lunchItems);

    // filtering dinner
    let dinnerItems = foodWithImages.filter((item) => item.type === "dinner");

    setDinner(dinnerItems);
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
          <input type="text" placeholder="Search food.." />
        </div>
      </div>
      <nav>
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </nav>
      <Card />
    </div>
  );
};

export default HomePage;
