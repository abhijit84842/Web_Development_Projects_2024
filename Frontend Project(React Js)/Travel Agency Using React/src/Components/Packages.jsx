import React from "react";
import "../CSS/packages.css";

// GSAP Animation
import gsap from "gsap";
// react GSAP Hooks
import { useGSAP } from "@gsap/react";

// ScrollTrigger Plugin
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images import
import mumbai from "../assets/images/mumbai.jpg";

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
        end: "top 10%",
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
              <p className="subtitle">
                A Vibrant Tapestry of Culture, Ambition, and Endless
                Possibilities
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
                  $<span> 90</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={mumbai} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Mumbai</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">
                A Vibrant Tapestry of Culture, Ambition, and Endless
                Possibilities
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
                  $<span> 90</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={mumbai} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Mumbai</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">
                A Vibrant Tapestry of Culture, Ambition, and Endless
                Possibilities
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
                  $<span> 90</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={mumbai} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Mumbai</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">
                A Vibrant Tapestry of Culture, Ambition, and Endless
                Possibilities
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
                  $<span> 90</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={mumbai} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Mumbai</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">
                A Vibrant Tapestry of Culture, Ambition, and Endless
                Possibilities
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
                  $<span> 90</span>
                </p>
              </div>
              <div className="button-box">
                <button className="btn-grad ">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={mumbai} alt="loading.." />
          <div className="sub-card">
            <div className="city-name">
              <ImLocation style={{ color: "red" }} />
              <p>Mumbai</p>
            </div>
            <div id="sub-card">
              <p className="subtitle">
                A Vibrant Tapestry of Culture, Ambition, and Endless
                Possibilities
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
                  $<span> 90</span>
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
