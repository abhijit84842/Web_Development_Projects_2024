import "./ImageGenerator.css";
import defaultImage from "../Assests/defaultImage.png";
import { useRef, useState } from "react";
import Loading from "../LoadingBar/Loading";

const ImageGenerator = () => {
  const [image, setImage] = useState(defaultImage);

  // useState for loading bar.....
  const [loading, setLoading] = useState(false);

  const userPrompt = useRef();
  // const currPrompt = userPrompt.current.value;
  // console.log(currPrompt);

  const handleGenerator = async () => {
    if (userPrompt.current.value === "") {
      return 0;
    }

    // Show Loading Bar
    setLoading(true);

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk-proj-9XT1feVToLiDXFcFhMx0T3BlbkFJofuxxiGVl6Eb6gymoba0",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${userPrompt.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );

    let data = await response.json();
    console.log(data);
    let data_array = data.data;
    setImage(data_array[0].url);

    // off loading bar
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="loadingbar">
        {loading ? <Loading /> : <img src={image} alt="Loading.." />}
      </div>

      <div className="input-section">
        <input type="text" ref={userPrompt} placeholder="image description.." />
        <button
          className="button"
          onClick={() => {
            handleGenerator();
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default ImageGenerator;
