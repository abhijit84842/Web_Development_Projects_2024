import style from "../src/CssModule/page.module.css";
import Card from "./components/Card";
function App() {
  return (
    <div className={style.mainContainer}>
      <div className={style.topContainer}>
        <h1 className={style.h1Tag}>Welcome To Food Plaza</h1>
        <div className={style.logoAndSearch}>
          <logo className={style.logo}>
            <img src="/Food Plaza.png" alt="loading.." />
          </logo>
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
      <Card />
    </div>
  );
}

export default App;
