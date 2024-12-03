import React from "react";

import "../CSS/domestic.css";

// react icons
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineSportsVolleyball } from "react-icons/md";

// images import
import singapore from "../assets/images/domesticimages/singapore.jpg";
import goa from "../assets/images/domesticimages/goa.jpg";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Domestic = () => {
  return (
    <div className="domestic-main-container">
      <h1>Domestic Tour Packages</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swipercomp" // need unic classname to avoid css conflict
      >
        <SwiperSlide>
          <div className="slide-card">
            <div className="img-box">
              <img src={goa} alt="loading.." />
            </div>

            <h2 className="domestic-name">Goa- The Special Beauty of Nature</h2>
            <div className="activity">
              <p>Beach, City Tours, Family, Honeymoon</p>
            </div>
            <div className="icons-activity">
              <div className="place">
                <FaEarthAmericas style={{ color: "blue" }} />
                <p>1 Place</p>
              </div>
              <div className="activity-box">
                <MdOutlineSportsVolleyball style={{ color: "red" }} />
                <p>4 Activity</p>
              </div>
            </div>
            <div className="blankdiv"></div>
            <div className="city-desc">
              <p>
                The queen of beaches, Goa is the smallest city in India, but it
                invites most of the attractive places in its vicinity. The
                nightlife, alluring sand beaches, sacred sites and the
                world-class heritage architecture of this place delivers the
                best…
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>15,000.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-card">
            <div className="img-box">
              <img src={goa} alt="loading.." />
            </div>

            <h2 className="domestic-name">Rajasthan Tour 3N-4D</h2>
            <div className="activity">
              <p>Family, Safari</p>
            </div>
            <div className="icons-activity">
              <div className="place">
                <FaEarthAmericas style={{ color: "blue" }} />
                <p>1 Place</p>
              </div>
              <div className="activity-box">
                <MdOutlineSportsVolleyball style={{ color: "red" }} />
                <p>2 Activity</p>
              </div>
            </div>
            <div className="blankdiv"></div>
            <div className="city-desc">
              <p>
                {" "}
                Are you planning a quick getaway tour of one of the most
                beautiful places in the middle of the Thar desert in Rajasthan,
                the state known for its colourful festivals, forts, arts, music,
                beautiful palaces
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>15,000.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Domestic;
