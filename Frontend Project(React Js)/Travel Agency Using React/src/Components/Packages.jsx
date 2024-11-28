import React from "react";
import "../CSS/packages.css";

// images import
import mumbai from "../assets/images/mumbai.jpg";

const Packages = () => {
  return (
    <div className="package-container">
      <h1>Packages</h1>
      <div className="card-container">
        <div className="card">
          <img src={mumbai} alt="loading.." />
          <div className="city-name">
            <p>City Name</p>
            <p className="subtitle">subtitle of city</p>
          </div>

          <div className="rating-box">
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
          </div>
          <div className="price-box">
            <p>
              $<span> 90</span>
            </p>
          </div>
          <div className="button-box">
            <button className="book-button">Book Now</button>
          </div>
        </div>

        <div className="card">
          <img src={mumbai} alt="loading.." />
          <div className="city-name">
            <p>City Name</p>
            <p className="subtitle">subtitle of city</p>
          </div>

          <div className="rating-box">
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
          </div>
          <div className="price-box">
            <p>
              $<span> 90</span>
            </p>
          </div>
          <div className="button-box">
            <button className="book-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
