import "../CSS/review.css";

// react icons
import { IoIosStar } from "react-icons/io"; // Star Rating icon
import { IoStarOutline } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";

import abhijit from "../assets/images/reviewimages/abhijit.jpg";

const Review = () => {
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
                <IoStarOutline style={{ color: "red" }} size={25} />
              </div>
            </div>
          </div>
        </div>

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
