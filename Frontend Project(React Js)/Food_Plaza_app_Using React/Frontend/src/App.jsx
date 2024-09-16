import style from "./page.module.css";
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
          <a href="">All</a>
          <a href="">Breakfast</a>
          <a href="">Lunch</a>
          <a href="">Dinner</a>
        </nav>

        <div className={style.subContainer}>
          <img src="/bg.png" alt="loadng..." />
        </div>
      </div>
    </div>
  );
}

export default App;
