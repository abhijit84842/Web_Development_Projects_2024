import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

import "./PagesCss/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
//import all_product from "../Components/Assets/all_product";

const ShopCatagory = (props) => {
  const { contextValue } = useContext(ShopContext);
  const products = contextValue.all_product;
  //console.log(products);
  //console.log(props);
  return (
    <div className="shop-category">
      <div>
        <img src={props.banner} alt="" />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
      </div>
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
      <div className="shopcategory-products">
        {products.map((list) => {
          if (props.category === list.category) {
            return <Item key={list.id} item={list} />;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCatagory;
