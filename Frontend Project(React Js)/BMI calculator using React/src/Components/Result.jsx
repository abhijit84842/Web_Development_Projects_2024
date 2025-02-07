const Result = ({ bmiRate }) => {
  return (
    <div className="result-container flex justify-center mt-10 text-2xl">
      <p>Your BMI is : {bmiRate}</p>
    </div>
  );
};

export default Result;
