import React from "react";

const BmiMessage = ({ message }) => {
  return (
    <div className="flex justify-center mt-5 text-xl">
      <p className="text-white">You are : {message}</p>
    </div>
  );
};

export default BmiMessage;
