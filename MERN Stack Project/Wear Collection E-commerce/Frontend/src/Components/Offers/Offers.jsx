import exclusiveimage from "../Assets/exclusive_image.png";
import "./Offers.css";
const Offers = () => {
  return (
    <div className="offers-container">
      <div className="offers-left">
        <p>Exclusive</p>
        <p> Offers For You</p>
        <span className="best-seller">ONLY ON BEST SELLERS PRODUCTS</span>
        <div className="check-offers">
          <span className="check-now">Check Now</span>
        </div>
      </div>

      <div className="offers-right">
        <img src={exclusiveimage} />
      </div>
    </div>
  );
};

export default Offers;
