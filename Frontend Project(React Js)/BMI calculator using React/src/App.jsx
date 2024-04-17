import { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import InputSection from "./Components/InputSection";
import Result from "./Components/Result";
import BmiMassage from "./Components/BmiMassage";

function App() {
  const [bmiRate, setBmiRate] = useState(0);

  const [massage, setMassage] = useState("NA");

  const handleTotalBmiRate = (bmiWeight, bmiHeight) => {
    const heightM = bmiHeight * 0.3048; // convert in meters.
    const newMassIndex = bmiWeight / (heightM * heightM);

    setBmiRate(newMassIndex.toFixed(2));

    if (newMassIndex > 25) {
      setMassage("Overweight");
    } else {
      setMassage("UnderWeight");
    }
  };

  const handleReload = () => {
    setBmiRate(0);
    setMassage("");
  };

  return (
    <div className="main-container">
      <div className="BMI-container">
        <Heading />
        <InputSection onTotalBmi={handleTotalBmiRate} onReload={handleReload} />
        <Result bmiRate={bmiRate} />
        <BmiMassage massage={massage} />
      </div>
    </div>
  );
}

export default App;
