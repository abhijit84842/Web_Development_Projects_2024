import "./App.css";
import Heading from "./Components/Heading/Heading";
import Loading from "./Components/LoadingBar/Loading";
import ImageGenerator from "./Components/imageGenerator/ImageGenerator";

function App() {
  return (
    <div className="main-container">
      <Heading />
      <Loading />
      <ImageGenerator />
    </div>
  );
}

export default App;
