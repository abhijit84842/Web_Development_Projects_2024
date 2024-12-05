import React from "react";

// Component Import
import NavBar from "../Components/NavBar";
import SwiperJsComp from "../Components/SwiperJsComp";
import Packages from "../Components/Packages";

import BookNow from "../Components/BookNow";
import Gallery from "../Components/Gallery";
import Review from "../Components/Review";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import DomesticComp from "../Components/DomesticComp";
import InternationalComp from "../Components/InternationalComp";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SwiperJsComp />
      <Packages />
      <DomesticComp />
      <InternationalComp />
      <BookNow />
      <Gallery />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
