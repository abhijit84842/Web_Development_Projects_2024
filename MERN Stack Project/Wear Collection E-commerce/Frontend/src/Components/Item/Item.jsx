import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ item }) => {
  // console.log(item);
  return (
    <div className="item-container">
      <Link to={`/Product/${item.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          className="item-image"
          src={item.image}
          alt=""
        />
      </Link>

      <div className="rating">
        {item.stars} ⭐ || {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="orginal-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage} % OFF)</span>
      </div>
    </div>
  );
};

export default Item;
