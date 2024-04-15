import { useState } from "react";
import "./App.css";
import ButtonSection from "./Components/ButtonSection";
import Display from "./Components/Display";

function App() {
  const [countNumber, setCountNumber] = useState(0);

  const handleIncrement = () => {
    const newIncrement = countNumber + 1;
    setCountNumber(newIncrement);
  };

  const handleDecrement = () => {
    const newDecrement = countNumber - 1;
    setCountNumber(newDecrement);
  };

  const handleReset = () => {
    const newReset = 0;
    setCountNumber(newReset);
  };

  return (
    <div className="main-container">
      <Display countNumber={countNumber} />
      <ButtonSection
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
