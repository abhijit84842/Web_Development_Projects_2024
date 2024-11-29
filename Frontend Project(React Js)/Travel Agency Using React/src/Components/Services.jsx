import React from "react";

import "../CSS/services.css";

import { FaHotel } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaPersonWalking } from "react-icons/fa6";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { GiCampingTent } from "react-icons/gi";

const Services = () => {
  return (
    <div className="services-main-container">
      <h1>Our Best Sevices For You</h1>
      <div className="sub-container">
        <div className="service">
          <div className="icon">
            <FaHotel style={{ color: "#f97316" }} size={100} />
          </div>
          <div className="name-about-box">
            <p className="name">Affordable Hotels</p>
            <p className="about">
              Experience the best in comfort and convenience with our exclusive
              hotel booking services. We offer a curated selection of
              accommodations, from luxury resorts to cozy stays, tailored to
              suit every traveler’s needs. Let us make your stay as memorable as
              your journey.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <IoFastFoodSharp style={{ color: "#f97316" }} size={100} />
          </div>
          <div className="name-about-box">
            <p className="name">Food & Drinks</p>
            <p className="about">
              Delight your taste buds with our exclusive food and drink
              services! From local culinary delights to international flavors,
              we ensure every meal is a memorable part of your journey. Enjoy
              hassle-free dining experiences tailored to your preferences,
              wherever you travel.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <FaPersonWalking style={{ color: "#f97316" }} size={100} />
          </div>
          <div className="name-about-box">
            <p className="name">Tourist Guide</p>
            <p className="about">
              Explore with confidence and uncover hidden gems with our
              professional tourist guide services. Our knowledgeable guides
              provide rich insights into local culture, history, and
              attractions, ensuring a truly immersive and unforgettable travel
              experience.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <RiFlightTakeoffLine style={{ color: "#f97316" }} size={100} />
          </div>
          <div className="name-about-box">
            <p className="name">Comfortable Travel</p>
            <p className="about">
              Travel in comfort and style with our premium transportation
              services. From spacious vehicles to seamless transfers, we
              prioritize your convenience and safety at every step. Sit back,
              relax, and enjoy a hassle-free journey tailored to your needs.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <GiCampingTent style={{ color: "#f97316" }} size={100} />
          </div>
          <div className="name-about-box">
            <p className="name">Adventure</p>
            <p className="about">
              Discover the thrill of adventure at the most breathtaking
              destinations! We curate exciting trips to stunning places,
              offering activities like trekking, camping, and more. Let us take
              you on a journey to explore the beauty and excitement of nature’s
              wonders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
