import React from "react";
import "../Css/createac.css";

const CreateAc = () => {
  return (
    <div className="acMainContainer">
      <h1>Create Your Ac</h1>
      <form className="formTag" action="">
        <div className="inputFileds">
          <input
            type="text"
            name=""
            id="name"
            placeholder="Enter Your name.."
          />
          <input type="text" name="age" placeholder="Enter your age.." />
          <input type="email" name="email" placeholder="Enter your email.." />
          <input
            type="text"
            name="password"
            placeholder="Enter a new password"
          />
          <button type="submit" className="submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAc;
