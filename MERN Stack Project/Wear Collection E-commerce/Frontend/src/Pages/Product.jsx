import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";

const Product = () => {
  const { contextValue } = useContext(ShopContext);
  //console.log(contextValue);
  const products = contextValue.all_product;
  //console.log(products);

  // usePrams=> React JS useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL.
  const { productId } = useParams();

  //console.log(productId);

  const Product = products.find((list) => list.id === Number(productId));
  console.log(Product);

  return (
    <div>
      <Breadcrums product={Product} />
    </div>
  );
};

export default Product;
