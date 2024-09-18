import React from "react";
import "../Css/login.css";
const AdminLoginPage = () => {
  // api call method
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(e.target.value);

    try {
      let res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({}),
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="loginMainContainer">
      <h1>Login Your Account</h1>
      <div className="loginContainer">
        <form className="subContainer" onSubmit={handleForm}>
          <input
            type="text"
            name="email"
            placeholder="Enter your email.."
            required
          />
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            required
          />
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
