import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return <p className="lead">Current Value of Counter is : {counterVal}</p>;
};

export default DisplayCounter;
