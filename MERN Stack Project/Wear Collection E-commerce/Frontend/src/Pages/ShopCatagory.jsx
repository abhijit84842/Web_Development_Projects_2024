import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import men_banner from "../Components/Assets/banner_mens.png";
import "./PagesCss/ShopCategory.css";

const ShopCatagory = (props) => {
  //const { contextValue } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div>
        <img src={men_banner} alt="" />
      </div>
    </div>
  );
};

export default ShopCatagory;
