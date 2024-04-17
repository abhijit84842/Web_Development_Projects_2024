import { useRef } from "react";
import "./InputSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InputSection = ({ onTotalBmi, onReload }) => {
  const weight = useRef();
  const height = useRef();

  const handleSubmitClick = (event) => {
    event.preventDefault();

    const bmiWeight = weight.current.value;
    const bmiHeight = height.current.value;

    onTotalBmi(bmiWeight, bmiHeight);
  };
  return (
    <div className="input-container">
      <form className="form-input" onSubmit={handleSubmitClick}>
        <div className="weight">
          <p>Weight(Kg)</p>
          <input
            type="text"
            ref={weight}
            placeholder="Enter weight.."
            required
          />
        </div>

        <div className="height">
          <p>Height(ft)</p>
          <input
            type="text"
            ref={height}
            placeholder="Enter weight.."
            required
          />
        </div>

        <button type="submit" className="btn btn-success btn-lg adSubmit">
          Submit
        </button>
      </form>

      <button
        type="button"
        onClick={onReload}
        className="btn btn-warning btn-lg adButton"
      >
        Reload
      </button>
    </div>
  );
};

export default InputSection;
