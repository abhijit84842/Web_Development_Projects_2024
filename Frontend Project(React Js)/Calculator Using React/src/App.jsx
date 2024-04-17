import Display from "./Components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick1 = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display dispalyValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick1}></ButtonsContainer>
    </div>
  );
}

export default App;
