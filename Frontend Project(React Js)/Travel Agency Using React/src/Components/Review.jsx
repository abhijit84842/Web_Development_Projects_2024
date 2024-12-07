import "../CSS/review.css";

// react icons
import { IoIosStar } from "react-icons/io"; // Star Rating icon
import { IoStarOutline } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";

// customer images import
import abhijit from "../assets/images/reviewimages/abhijit.jpg";
import ayan from "../assets/images/reviewimages/ayan.jpg";
import rajat from "../assets/images/reviewimages/rajat.jpg";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";

const Review = () => {
  useGSAP(() => {
    // final to initial position
    gsap.from(".review-sub-container", {
      scale: 0,
      opacity: 0,
      duration: 2,
      width: "5%",
      rotate: 360,
    });
  });
  return (
    <div className="review-main-container">
      <h1>REVIEW</h1>
      <div className="review-sub-container">
        <div className="review-card">
          <div className="customer-img-box">
            <img src={abhijit} alt="loading.." />
          </div>

          <div className="customer-details">
            <p className="customer-name">Abhijit Das</p>
            <p className="customer-review">
              I recently booked a vacation through ViewWorld Travel Agency, and
              I couldn't be happier with their service. They handled everything
              professionally, from ticket booking to accommodation. Their staff
              was friendly, responsive, and always ready to help. It was a
              stress-free experience, and I'll definitely choose them for my
              future travels!
            </p>
            <div className="review-rating">
              <div>
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="customer-img-box">
            <img src={ayan} alt="loading.." />
          </div>

          <div className="customer-details">
            <p className="customer-name">Ayan Munshi</p>
            <p className="customer-review">
              ViewWorld Travel Agency exceeded my expectations with their
              outstanding customer service. They took the time to understand my
              travel preferences and created a perfect itinerary. Any concerns I
              had were promptly addressed, making my trip smooth and enjoyable.
              Highly recommend their services!
            </p>
            <div className="review-rating">
              <div>
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoStarOutline style={{ color: "red" }} size={25} />
              </div>
            </div>
          </div>
        </div>

        <div className="review-card">
          <div className="customer-img-box">
            <img src={rajat} alt="loading.." />
          </div>

          <div className="customer-details">
            <p className="customer-name">Rajat Ghose</p>
            <p className="customer-review">
              Planning a trip has never been this easy, thanks to ViewWorld
              Travel Agency. They provided great options that suited my budget
              and needs. Everything was arranged seamlessly, allowing me to
              focus on enjoying my vacation. I'll be recommending them to all my
              friends and family!
            </p>
            <div className="review-rating">
              <div>
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStar style={{ color: "red" }} size={25} />
              </div>
              <div>
                {" "}
                <IoIosStarHalf style={{ color: "red" }} size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
