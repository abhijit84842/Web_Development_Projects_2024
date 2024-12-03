import React from "react";
import "../CSS/domestic.css";

// import images
import dubai from "../assets/images/internationalimages/dubai.jpg";
import egypt from "../assets/images/internationalimages/egypt.jpg";
import singapore from "../assets/images/internationalimages/singapore.jpg";

// react icons
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineSportsVolleyball } from "react-icons/md";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const International = () => {
  return (
    <div className="domestic-main-container">
      <h1>Best International Tour Packages For You</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        modules={[Pagination, Autoplay]}
        className="swipercomp" // need unic classname to avoid css conflict
      >
        <SwiperSlide>
          <div className="slide-card">
            <div className="img-box">
              <img src={dubai} alt="loading.." />
            </div>

            <h2 className="domestic-name">Marvelous Dubai</h2>
            <div className="activity">
              <p>City Tours, Family, Safari</p>
            </div>
            <div className="icons-activity">
              <div className="place">
                <FaEarthAmericas style={{ color: "blue" }} />
                <p>1 Place</p>
              </div>
              <div className="activity-box">
                <MdOutlineSportsVolleyball style={{ color: "red" }} />
                <p>3 Activity</p>
              </div>
            </div>
            <div className="blankdiv"></div>
            <div className="city-desc">
              <p>
                Have you been thinking of a visit to Dubai? Come to Dubai on a 4
                nights 5 days tour and savour some of its finest technological
                marvels. The Palm Island, Jumeirah Mosque, Ferrari World, Dubai
                Mall, and Burj Khalifa are among some of the wonders to marvel
                at.
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>60,199.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-card">
            <div className="img-box">
              <img src={egypt} alt="loading.." />
            </div>

            <h2 className="domestic-name">Iconic Egypt</h2>
            <div className="activity">
              <p>City Tours, Family, Safari</p>
            </div>
            <div className="icons-activity">
              <div className="place">
                <FaEarthAmericas style={{ color: "blue" }} />
                <p>1 Place</p>
              </div>
              <div className="activity-box">
                <MdOutlineSportsVolleyball style={{ color: "red" }} />
                <p>3 Activity</p>
              </div>
            </div>
            <div className="blankdiv"></div>
            <div className="city-desc">
              <p>
                {" "}
                Egypt, the land of the Pyramids, does not need any introduction
                as the registration in the Seven Wonders of the World is
                sufficient to define the archaeology and the rich culture of
                this place. It is a country which pays homage to a very high
                number of tourists every year.
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>63,499.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-card">
            <div className="img-box">
              <img src={singapore} alt="loading.." />
            </div>

            <h2 className="domestic-name">Dazzling Singapore</h2>
            <div className="activity">
              <p>Beach, City Tours, Family, Jungle</p>
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
                {" "}
                Singapore is a state of fun. It is a modern and vibrant nation
                with numerous opportunities and an excellent educational system,
                allowing students from worldwide to take this option of studying
                abroad from this location.
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>50,299.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slide-card">
            <div className="img-box">
              <img src="" alt="loading.." />
            </div>

            <h2 className="domestic-name">Himachal-State Shrouded in Snow</h2>
            <div className="activity">
              <p>City Tours</p>
            </div>
            <div className="icons-activity">
              <div className="place">
                <FaEarthAmericas style={{ color: "blue" }} />
                <p>1 Place</p>
              </div>
              <div className="activity-box">
                <MdOutlineSportsVolleyball style={{ color: "red" }} />
                <p>1 Activity</p>
              </div>
            </div>
            <div className="blankdiv"></div>
            <div className="city-desc">
              <p>
                {" "}
                Himachal Pradesh literally means ‘Land Covered in Snow’. This
                North Indian state nestled in the Himalayas is basically divided
                into two halves with Shimla, the capital in the centre
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>16,500.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slide-card">
            <div className="img-box">
              <img src="" alt="loading.." />
            </div>

            <h2 className="domestic-name">
              Kashmir – The Amazing natural Beauty
            </h2>
            <div className="activity">
              <p>City Tours, Jungle, Mountain, Safari</p>
            </div>
            <div className="icons-activity">
              <div className="place">
                <FaEarthAmericas style={{ color: "blue" }} />
                <p>1 Place</p>
              </div>
              <div className="activity-box">
                <MdOutlineSportsVolleyball style={{ color: "red" }} />
                <p>5 Activity</p>
              </div>
            </div>
            <div className="blankdiv"></div>
            <div className="city-desc">
              <p>
                {" "}
                Kashmir is a haven of natural beauty, often called "Paradise on
                Earth." The shimmering Dal Lake, surrounded by houseboats and
                floating gardens, adds a magical charm.
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>45,500.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slide-card">
            <div className="img-box">
              <img src="" alt="loading.." />
            </div>

            <h2 className="domestic-name">Kerala –The Beautiful Land</h2>
            <div className="activity">
              <p>
                Beach, City Tours, Family, Hill Stations, Jungle, Mountain,
                Safari
              </p>
            </div>
            <div className="icons-activity">
              <div className="place">
                <FaEarthAmericas style={{ color: "blue" }} />
                <p>1 Place</p>
              </div>
              <div className="activity-box">
                <MdOutlineSportsVolleyball style={{ color: "red" }} />
                <p>7 Activity</p>
              </div>
            </div>
            <div className="blankdiv"></div>
            <div className="city-desc">
              <p>
                {" "}
                God’s Own country, Kerala is one of the most popular tourist
                destinations in India. Kerala is famous especially because of
                the unmatched natural beauty.
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>32,500.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default International;
