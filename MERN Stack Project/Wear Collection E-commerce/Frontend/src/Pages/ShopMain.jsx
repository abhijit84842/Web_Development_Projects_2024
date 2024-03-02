import Header from "../Components/Header/Header";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter.jsx/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
//import ShopConextProvider from "../Context/ShopContext";
import Home from "../routes/Home";
import Hero from "../Components/Hero/Hero";

const ShopMain = () => {
  return (
    <div>
      <Hero />
      <Header />
      <Popular />
      <NewCollections />
      <Offers />
      <Home />
      <NewsLetter />
    </div>
  );
};
export default ShopMain;
