import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <div className="productdisplay-right-ratings">
            <span>Ratings : {product.rating.stars}</span>
          </div>
          <div className="productdisplay-right-emptydiv"></div>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-orginal-price">
            RS {product.original_price}
          </div>
          <div className="productdisplay-right-prices-current-price">
            Rs {product.current_price}
          </div>
        </div>
        {/* <div className="productdisplay-right-star-description">
          Green floral print gown dress V-neck Long, regular sleeves Layered
          detail Maxi length in flared hem Georgette fabric
        </div> */}
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button>ADD TO CART</button>
        <div className="productdisplay-right-emptydiv"></div>
        <p className="productdisplay-right-category">
          <span>Category : {product.category}, </span>
          Shirt , Blue , Full-Cotton
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern , Latest
        </p>

        <div className="productdisplay-right-deliveryoptions">
          <div className="productdisplay-right-deliveryoptions-pincode">
            <input type="text" placeholder="Enter pincode" />
            <span className="productdisplay-right-deliveryoptions-pincode-check">
              Check
            </span>
            <p>
              Please enter Pin Code to check delivery time & Pay on Delivery
              Availability
            </p>
          </div>
          <div className="productdisplay-right-deliveryoptions-descriptions">
            <p>100% Orginal Products</p>
            <p>Pay on Delivery might be available</p>
            <p> Easy {product.return_period} days returns and exchanges</p>
            <p>Try & Buy might be available</p>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ProductDisplay;
