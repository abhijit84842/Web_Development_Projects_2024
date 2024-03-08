import { useContext } from "react";
import { useSelector } from "react-redux";
import { ShopContext } from "../Context/ShopContext";
import BagItem from "../Components/BagItem/BagItem";

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
      {finalItems.map((list) => (
        <BagItem key={list.id} item={list} />
      ))}
    </div>
  );
};

export default Bag;
