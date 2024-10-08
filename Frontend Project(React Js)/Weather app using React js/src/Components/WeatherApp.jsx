import "./WeatherApp.css";
import { GoSearch } from "react-icons/go";
import cloud_icon from "../assets/cloud.png";
import rain_icon from "../assets/rain.png";
import clear_icon from "../assets/clear.png";
import showerRain_icon from "../assets/showerRain.png";
import snow_icon from "../assets/snow.png";
import mist_icon from "../assets/mist.png";
import scattered_clods_icon from "../assets/scattered clouds.png";
import broken_cloud_icon from "../assets/BrokenCloud.png";
import thunderStrom_icon from "../assets/thunderstorm.png";

import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import { useState } from "react";

// night  icoons  ..
import clear_night_icon from "../assets/night icons/clearNight.png";
import few_cloud_icon from "../assets/night icons/few_cloud.png";
import night_rain from "../assets/night icons/rain_night.png";

const WeatherApp = () => {
  // API Use...
  let api_key = "29d264dc25d43fed56ad3fa0f447e26f";

  // useState for day icons update ..
  const [icons, setIcons] = useState(clear_icon);

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
    console.log(data);

    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("location");
    const humidity = document.getElementsByClassName("percentage");
    const wind = document.getElementsByClassName("wind-speed");

    // update innerHtml
    temprature[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;
    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/h";

    // icon update according to weather condition.. in Day
    const icon_value = data.weather[0].icon;
    if (icon_value === "01d") {
      setIcons(clear_icon);
    } else if (icon_value === "02d") {
      setIcons(cloud_icon);
    } else if (icon_value === "03d" || icon_value === "03n") {
      setIcons(scattered_clods_icon);
    } else if (icon_value === "04d" || icon_value === "04n") {
      setIcons(broken_cloud_icon);
    } else if (icon_value === "09d" || icon_value === "09n") {
      setIcons(showerRain_icon);
    } else if (icon_value === "10d") {
      setIcons(rain_icon);
    } else if (icon_value === "11d" || icon_value === "11n") {
      setIcons(thunderStrom_icon);
    } else if (icon_value === "13d" || icon_value === "13n") {
      setIcons(snow_icon);
    } else if (icon_value === "50d" || icon_value === "50n") {
      setIcons(mist_icon);
    }

    //night icons update....
    if (icon_value === "01n") {
      setIcons(clear_night_icon);
    } else if (icon_value === "02n") {
      setIcons(few_cloud_icon);
    } else if (icon_value === "10n") {
      setIcons(night_rain);
    }
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
        <img src={icons} className="weather-icon" alt="loading..." />
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
