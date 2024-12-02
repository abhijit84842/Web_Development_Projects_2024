import "./App.css";
import NavBar from "./Components/NavBar";
import Packages from "./Components/Packages";
import Services from "./Components/Services";
import SwiperJsComp from "./Components/SwiperJsComp";
import Gallery from "./Components/Gallery";
import BookNow from "./Components/BookNow";
import Review from "./Components/Review";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <SwiperJsComp />
      <Packages />
      <Services />
      <BookNow />
      <Gallery />
      <Review />
      <Contact />
    </>
  );
}

export default App;
