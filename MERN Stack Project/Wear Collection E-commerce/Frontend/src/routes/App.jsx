import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import Home from "./Home";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter.jsx/NewsLetter";
import ShopConextProvider from "../Context/ShopContext";

function App() {
  return (
    <ShopConextProvider>
      <Header />
      <Hero />
      <Popular />
      <NewCollections />
      <Offers />
      <Home />
      <NewsLetter />
      <Footer />
    </ShopConextProvider>
  );
}

export default App;
