import "../Css/card.css";

// import CardList from "./CardList";

const Card = ({ foodtype }) => {
  return (
    <div className="CardSubContainer">
      <div className="mainContainer">
        {foodtype?.map((list) => (
          <div className="cardContainer" key={list._id}>
            <div className="card">
              <img src={list.imageSrc} alt="loading" />
              <div>
                <p>
                  <span className="foodname">{list.name}</span>
                </p>
                <p>{list.description}</p>
              </div>
            </div>
            <div className="price">
              <span>$ {list.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
