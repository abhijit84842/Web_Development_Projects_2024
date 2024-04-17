import "./WeatherApp.css";
import { GoSearch } from "react-icons/go";

const WeatherApp = () => {
  return (
    <div className="weather-container">
      <div className="input-field">
        <input type="text" required />
        <div className="search-icon">
          <GoSearch size="2rem" />
        </div>
      </div>
      <div className="weather-img">
        <img src="#" alt="" />
      </div>
    </div>
  );
};

export default WeatherApp;
