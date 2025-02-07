import { useState } from "react";
import InputSection from "./Components/InputSection";
import Result from "./Components/Result";
import BmiMassage from "./Components/BmiMessage";

function App() {
  const [bmiRate, setBmiRate] = useState(0);

  const [message, setMessage] = useState("NA");

  const handleTotalBmiRate = (bmiWeight, bmiHeight) => {
    const heightM = bmiHeight * 0.3048; // convert in meters.
    const newMassIndex = bmiWeight / (heightM * heightM);

    setBmiRate(newMassIndex.toFixed(2));

    if (newMassIndex > 25) {
      setMessage("Overweight");
    } else {
      setMessage("UnderWeight");
    }
  };

  const handleReload = () => {
    setBmiRate(0);
    setMassage("");
  };

  return (
    <div className="main-container  flex justify-center">
      <div className="bmi-box bg-slate-800 mt-[10rem] w-[40rem] p-5 rounded-lg text-white">
        <h3 className="flex justify-center text-4xl font-semibold mb-10">
          BMI Calculator
        </h3>
        <InputSection onTotalBmi={handleTotalBmiRate} onReload={handleReload} />
        <Result bmiRate={bmiRate} />
        <BmiMassage message={message} />
      </div>
    </div>
  );
}

export default App;
