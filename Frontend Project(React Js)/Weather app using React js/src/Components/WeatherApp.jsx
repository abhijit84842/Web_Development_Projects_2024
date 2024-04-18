import "./WeatherApp.css";
import { GoSearch } from "react-icons/go";
import cloud_icon from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";

const WeatherApp = () => {
  // API Use...
  let api_key = "29d264dc25d43fed56ad3fa0f447e26f";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    let inputValue = element[0].value;
    // console.log(inputValue);
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=${api_key}`;

    let reponse = await fetch(url);
    let data = await reponse.json();
    // console.log(data);

    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("location");
    const humidity = document.getElementsByClassName("percentage");
    const wind = document.getElementsByClassName("wind-speed");

    // update innerHtml
    temprature[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name;
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/h";
  };

  return (
    <div className="weather-container">
      <div className="input-field">
        <input
          type="text"
          className="cityInput"
          placeholder="Enter your city"
          required
        />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
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
