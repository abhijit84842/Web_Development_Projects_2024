import { useEffect, useState } from "react";
import style from "../src/CssModule/page.module.css";
import Card from "./components/Card";
function App() {
  const [foodList, setFoodList] = useState(null);
  const handleCallApi = async () => {
    try {
      let res = await fetch("http://localhost:3000/fooddata");
      let data = await res.json();
      // console.log(data);
      setFoodList(data);
    } catch (err) {
      console.log("cant not get data");
    }
  };

  useEffect(() => {
    handleCallApi();
  }, []);
  // console.log(foodList);
  return (
    <div className={style.mainContainer}>
      <div className={style.topContainer}>
        <div className={style.headingAndAdmin}>
          <h1 className={style.h1Tag}>Welcome To Food Plaza</h1>
          <div className={style.adminlogin}>
            <a href="#">Admin Login</a>
          </div>
        </div>

        <div className={style.logoAndSearch}>
          <div className={style.logo}>
            <img src="/Food Plaza.png" alt="loading.." />
          </div>
          <div className={style.search}>
            <input type="text" placeholder="Search food.." />
          </div>
        </div>
        <nav>
          <button>All</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </nav>
      </div>
      <Card food={foodList} />
    </div>
  );
}

export default App;
