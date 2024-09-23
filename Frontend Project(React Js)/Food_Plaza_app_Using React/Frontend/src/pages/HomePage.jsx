import Card from "../components/Card";
import "../Css/page.css";
import { Link } from "react-router-dom";

const HomePage = () => {
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
