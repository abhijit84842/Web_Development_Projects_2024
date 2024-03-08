import { useContext } from "react";
import { useSelector } from "react-redux";
import { ShopContext } from "../Context/ShopContext";
import BagItem from "../Components/BagItem/BagItem";
import "../Components/BagItem/BagItem.css";
import BagSummary from "../Components/BagSummary/BagSummary";

const Bag = () => {
  const { contextValue } = useContext(ShopContext);
  const product = contextValue.all_product;
  const bagItem = useSelector((store) => store.bag);

  //compare item which is present in bag ..
  const finalItems = product.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);

    return itemIndex >= 0;
  });

  //   console.log(finalItems);
  return (
    <div className="bag-page">
      <div className="bag-items-container">
        {finalItems.map((list) => (
          <BagItem key={list.id} item={list} />
        ))}
      </div>
      <BagSummary />
    </div>
  );
};

export default Bag;
