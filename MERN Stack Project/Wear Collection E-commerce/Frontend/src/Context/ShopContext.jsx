import { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext([]);

// // cart method
// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < all_product.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

const ShopConextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={{ contextValue: contextValue }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopConextProvider;
