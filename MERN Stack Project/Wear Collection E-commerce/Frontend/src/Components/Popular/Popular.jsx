import "./Popular.css";
import data_product from "../Assets/data";
import PopularItems from "../Item/PopularItems";
const Popular = () => {
  return (
    <main>
      <div className="populars-container">
        {data_product.map((item) => (
          <PopularItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Popular;
