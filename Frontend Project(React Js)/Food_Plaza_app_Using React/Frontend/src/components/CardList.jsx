import "../Css/card.css";

const CardList = ({ foodList }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src="" alt="loading" />
        <div>
          <p>{foodList.name}</p>
          <p>{foodList.description}</p>
        </div>
      </div>
      <div className="price">
        <span>${foodList.price}</span>
      </div>
    </div>
  );
};

export default CardList;
