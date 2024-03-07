import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionsBox from "../Components/DescriptionsBox/DescriptionsBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { contextValue } = useContext(ShopContext);
  //console.log(contextValue);
  const products = contextValue.all_product;

  // usePrams=> React JS useParams Hook helps to access the parameters of the current route to manage the dynamic routes in the URL.
  const { productId } = useParams();

  const Product = products.find((list) => list.id === Number(productId));
  // console.log(Product);

  return (
    <div>
      <Breadcrums product={Product} />
      <ProductDisplay product={Product} />
      <DescriptionsBox product={Product} />
      <RelatedProducts relatedproduct={Product} />
    </div>
  );
};

export default Product;
