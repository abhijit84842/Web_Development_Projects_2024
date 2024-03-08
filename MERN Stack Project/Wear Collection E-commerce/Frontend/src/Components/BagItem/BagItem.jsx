import "./BagItem.css";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { bagSliceActions } from "../../Store/bagSlice";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagSliceActions.revomeFromBag(item.id));
  };
  return (
    <div className="bag-item-container">
      <div className="bag-item-container-left-part">
        <img className="bag-item-image" src={item.image} alt="" />
      </div>
      <div className="bag-item-container-right-part">
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.name}</div>
        <div className="price-container">
          <span className="current-price"> R.S {item.current_price}</span>
          <span className="orginal-price">R.S {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-policy">
          <span className="return-policy-value">{item.return_period}</span> days
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-day"> {item.delivery_date}</span>
        </div>
      </div>
      <div className="remove-from-bag" onClick={handleRemoveItem}>
        <TiDelete size="2rem" />
      </div>
    </div>
  );
};

export default BagItem;
