import "./WeatherApp.css";
import { GoSearch } from "react-icons/go";
import cloud_icon from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";

const WeatherApp = () => {
  return (
    <div className="weather-container">
      <div className="input-field">
        <input type="text" placeholder="Enter your city" required />
        <div className="search-icon">
          <GoSearch size="2rem" />
        </div>
      </div>
      <div className="weather-img">
        <img src={cloud_icon} alt="loading..." />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="location">Kolkata</div>

      <div className="data-container">
        <div className="left-humidity">
          <div className="humidity">
            <img src={humidity} alt="" />
            <span className="percentage">74%</span>
          </div>
          <p className="humidity-name">Humidity</p>
        </div>

        <div className="right-wind">
          <div className="wind">
            <img src={wind} alt="" />
            <span className="wind-speed">5.14 km/h</span>
          </div>
          <p className="wind-name">Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
