import { useEffect } from "react";
import "./App.css";

async function App() {
  const fetchApi = async () => {
    let res = await fetch("http://localhost:3000/api/name");
    let name = await res.json();
    return name;
  };
  let data = await fetchApi();
  console.log(data);

  return <div></div>;
}

export default App;
