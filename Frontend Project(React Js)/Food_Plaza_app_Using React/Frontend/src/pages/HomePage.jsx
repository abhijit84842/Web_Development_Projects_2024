import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../Css/page.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [foodData, setFoodData] = useState(null);

  // fetch food api
  const fetchFood = async () => {
    let res = await fetch("http://localhost:3000/api/fooddata");
    let result = await res.json();
    setFoodData(result.data);
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
      <Card food={foodData} />
    </div>
  );
};

export default HomePage;
