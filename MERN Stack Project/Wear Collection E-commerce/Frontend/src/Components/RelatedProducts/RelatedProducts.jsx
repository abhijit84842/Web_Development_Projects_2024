import { useContext } from "react";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
import "./RelatedProducts.css";

const RelatedProducts = ({ relatedproduct }) => {
  //   console.log(relatedproduct.category);
  const { contextValue } = useContext(ShopContext);
  const Product = contextValue.all_product;
  //   console.log(Product.category);

  return (
    <div className="relatedProducts">
      <h1>Similar Products</h1>
      <div className="relatedproducts-item">
        {Product.map((list) => {
          if (list.category === relatedproduct.category) {
            return <Item key={list.id} item={list} />;
          }
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
