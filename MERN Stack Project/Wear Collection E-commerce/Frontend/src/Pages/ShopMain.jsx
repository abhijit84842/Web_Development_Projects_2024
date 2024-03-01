import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter.jsx/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import ShopConextProvider from "../Context/ShopContext";
import Home from "../routes/Home";
import Hero from "../Components/Hero/Hero";

const ShopMain = () => {
  return (
    <div>
      <ShopConextProvider>
        <Hero />
        <Header />
        <Popular />
        <NewCollections />
        <Offers />
        <Home />
        <NewsLetter />
      </ShopConextProvider>
    </div>
  );
};
export default ShopMain;
