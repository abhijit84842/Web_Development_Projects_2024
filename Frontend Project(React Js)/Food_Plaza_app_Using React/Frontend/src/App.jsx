import Header from "./Components/Header";
import axios from "axios";

function App() {
  const handleApi = async () => {
    let res = await axios.get("http://localhost:3000/fooddata");

    console.log(res);
  };
  return (
    <>
      <Header />
      <button onClick={() => handleApi()}>Api Fetch</button>
    </>
  );
}

export default App;
