import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been setup");
    const IntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(IntervalId);
      console.log("Cancel the interval");
    };
  }, []);

  return (
    <center>
      <div>
        <p>
          This is the Current Date : {time.toLocaleDateString()} And Time is :
          {time.toLocaleTimeString()}
        </p>
      </div>
    </center>
  );
};

export default CurrentTime;
