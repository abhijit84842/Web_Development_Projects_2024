import "./Item.css";
const Item = ({ item }) => {
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="" />
      <div className="rating">
        {item.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="orginal-price">Rs {item.orginal_price}</span>
        <span className="discount">({item.discount_percentage} % OFF)</span>
      </div>
    </div>
  );
};

export default Item;
