import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Clock_Heading from "./Components/Comp_1";
import Clock_Slogan from "./Components/Comp_2";
import CurrentTime from "./Components/Comp_3";

function App() {
  return (
    <div>
      <Clock_Heading></Clock_Heading>
      <Clock_Slogan></Clock_Slogan>
      <CurrentTime />
    </div>
  );
}

export default App;
