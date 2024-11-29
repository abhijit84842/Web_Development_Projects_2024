import "./App.css";
import NavBar from "./Components/NavBar";
import Packages from "./Components/Packages";
import Services from "./Components/Services";
import SwiperJsComp from "./Components/SwiperJsComp";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <NavBar />
      <SwiperJsComp />
      <Packages />
      <Services />
      <Gallery />
    </>
  );
}

export default App;
