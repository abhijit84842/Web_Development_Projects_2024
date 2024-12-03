import React from "react";

import "../CSS/domestic.css";

// react icons
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineSportsVolleyball } from "react-icons/md";

// images import
import goa from "../assets/images/domesticimages/goa.jpg";
import rajashtan from "../assets/images/domesticimages/rajashtan.jpg";
import andaman from "../assets/images/domesticimages/andaman.jpg";
import himachal from "../assets/images/domesticimages/himachal.jpg";
import kashmir from "../assets/images/domesticimages/kashmir.jpg";
import kerala from "../assets/images/domesticimages/kerala.jpg";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
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
              <img src={rajashtan} alt="loading.." />
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
                ₹ <span>10,500.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-card">
            <div className="img-box">
              <img src={andaman} alt="loading.." />
            </div>

            <h2 className="domestic-name">Exotic Anadaman</h2>
            <div className="activity">
              <p>Beach, City Tours, Jungle, Safari</p>
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
                4 Nights and 5 Days With long weekends around the corner this
                festive season, many of us have been contemplating travelling to
                nearby places where one can enjoy with friends and family and
                relax and rejuvenate.
              </p>
            </div>
            <div className="blankdiv-2nd"></div>
            <div className="tour-price">
              <p>
                ₹ <span>22,500.00</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slide-card">
            <div className="img-box">
              <img src={himachal} alt="loading.." />
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
              <img src={kashmir} alt="loading.." />
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
              <img src={kerala} alt="loading.." />
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

export default Domestic;
