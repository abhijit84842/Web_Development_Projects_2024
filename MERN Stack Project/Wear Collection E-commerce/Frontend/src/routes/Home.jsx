import Item from "../Components/Item/Item";
import all_product from "../Components/Assets/all_product";
import "../Components/Item/Item.css";

const Home = () => {
  return (
    <main>
      <div className="items-container">
        {all_product.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Home;
