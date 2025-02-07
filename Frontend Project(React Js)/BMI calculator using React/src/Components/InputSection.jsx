import { useRef } from "react";
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
    <div className="input-container flex justify-center flex-col items-center">
      <form className="form-input" onSubmit={handleSubmitClick}>
        <div className="flex flex-col my-3">
          <label htmlFor="weight" className="text-2xl">
            Weight(kg)
          </label>
          <input
            id="weight"
            type="number"
            ref={weight}
            placeholder="Enter weight.."
            required
            className="my-4 bg-white w-[30rem] p-2 text-black outline-none rounded-lg"
          />
        </div>

        <div className="flex flex-col my-3">
          <label htmlFor="height" className="text-2xl">
            Height(ft)
          </label>
          <input
            id=""
            type="number"
            ref={height}
            placeholder="Enter height.."
            required
            className="mt-2 bg-white w-[30rem] p-2 text-black outline-none rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 p-2 w-[15rem] rounded-full text-2xl font-semibold my-10 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>

      <button
        type="button"
        onClick={onReload}
        className="bg-yellow-500 p-2 w-[10rem] text-2xl rounded-full cursor-pointer"
      >
        Reload
      </button>
    </div>
  );
};

export default InputSection;
