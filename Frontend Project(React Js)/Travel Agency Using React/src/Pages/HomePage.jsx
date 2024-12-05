import React from "react";

// Component Import
import NavBar from "../Components/NavBar";
import SwiperJsComp from "../Components/SwiperJsComp";
import Packages from "../Components/Packages";
import Domestic from "../Components/Domestic";
import International from "../Components/International";
import BookNow from "../Components/BookNow";
import Gallery from "../Components/Gallery";
import Review from "../Components/Review";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SwiperJsComp />
      <Packages />
      <Domestic />
      <International />
      <BookNow />
      <Gallery />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
