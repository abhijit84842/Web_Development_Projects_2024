import React from "react";
import "../CSS/packages.css";

// GSAP Animation
import gsap from "gsap";
// react GSAP Hooks
import { useGSAP } from "@gsap/react";

// ScrollTrigger Plugin
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images import
import mumbai from "../assets/images/packageimages/mumbai.jpg";
import sikkim from "../assets/images/packageimages/sikkim.jpg";
import kedarnath from "../assets/images/packageimages/kedarnath.jpg";
import rameswaram from "../assets/images/packageimages/rameswaram.jpg";
import darjeeling from "../assets/images/packageimages/darjeeling.jpg";
import dawki from "../assets/images/packageimages/dawki.jpg";

// React icons
import { ImLocation } from "react-icons/im"; // location icon
import { IoIosStar } from "react-icons/io"; // Star Rating icon
import { IoStarOutline } from "react-icons/io5"; //  Star Rating icon

const Packages = () => {
  // Register the gsap ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".card", {
      scale: 0,
      delay: 3,
      duration: 5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".card",
        // markers: true,
        start: "top 100%",
        end: "top 50%",
        scrub: 2,
      },
    });
  });
  return (
    <div className="package-container">
      <h1>Packages</h1>
      <div className="card-container">
        <div className="card">
          <img src={mumbai} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Mumbai</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">The City That Never Sleeps</p>

              <div className="rating-box">
                <div>
                  <IoIosStar style={{ color: " red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoStarOutline size={25} />
                </div>
              </div>
              <div className="price-box">
                <p>
                  ₹ <span>10,500</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={sikkim} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Sikkim</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">
                The Land of Pristine Glaciers and Monasteries
              </p>

              <div className="rating-box">
                <div>
                  <IoIosStar style={{ color: " red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoStarOutline size={25} />
                </div>
              </div>
              <div className="price-box">
                <p>
                  ₹ <span>11,500</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={kedarnath} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Kedarnath</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">
                Where Devotion Meets the Serenity of Nature
              </p>

              <div className="rating-box">
                <div>
                  <IoIosStar style={{ color: " red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoStarOutline size={25} />
                </div>
              </div>
              <div className="price-box">
                <p>
                  ₹ <span> 21,000</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={rameswaram} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Rameswaram</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">
                The Sacred Land of Ramanathaswamy Temple
              </p>

              <div className="rating-box">
                <div>
                  <IoIosStar style={{ color: " red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoStarOutline size={25} />
                </div>
              </div>
              <div className="price-box">
                <p>
                  ₹ <span> 15,000</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={dawki} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Dawki Meghalaya</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">The Crystal Clear Waters of Meghalaya</p>

              <div className="rating-box">
                <div>
                  <IoIosStar style={{ color: " red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoStarOutline size={25} />
                </div>
              </div>
              <div className="price-box">
                <p>
                  ₹ <span> 20,000</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={darjeeling} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Darjeeling</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">The Queen of the Hills</p>

              <div className="rating-box">
                <div>
                  <IoIosStar style={{ color: " red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoIosStar style={{ color: "red" }} size={25} />
                </div>
                <div>
                  <IoStarOutline size={25} />
                </div>
              </div>
              <div className="price-box">
                <p>
                  ₹ <span>8,500</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
