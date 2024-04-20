import "./ImageGenerator.css";
import aiImage from "../Assests/aiimage.png";

const ImageGenerator = () => {
  return (
    <div className="container">
      <div className="img">
        <img src={aiImage} alt="Loading.." />
      </div>
      <div className="input-section">
        <input type="text" placeholder="image description.." />
        <button className="button">Generate</button>
      </div>
    </div>
  );
};

export default ImageGenerator;
