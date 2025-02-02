import { useState } from "react";
import "../Css/login.css";

// import useForm hook
import { useForm } from "react-hook-form";

const AdminLoginPage = () => {
  const [shake, setShake] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // to get the form data
  const onSubmit = async (data) => {
    setShake(true);
    // console.log(data);
    try {
      let res = await fetch("http://localhost:3002/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include", // Include cookies in the request

        body: JSON.stringify(data),
      });

      let rslt = await res.json();
      // console.log(rslt);
      if (rslt.success) {
        alert("You are successfully login..");
      } else {
        alert(rslt.msg);
      }
    } catch (err) {
      alert("Error submiting form");
    }
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="login-main-container ">
      <div className={`login-sub-container ${shake ? "shake" : ""}`}>
        <h2>Admin Login</h2>
        <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Email</label>
            <input /* Email section validation  */
              type="text"
              {...register("email", {
                required: "Email is required...",
                pattern: {
                  // use email pattert type
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
                onChange: (e) =>
                  setValue("email", e.target.value.toLowerCase()), // convert the email in lower case
              })}
              placeholder="Enter your email.."
              className="am-input"
            />
            {errors.email && (
              <p className="errorMsgForm">{errors.email.message}</p>
            )}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input /* Password section validation  */
              type="password"
              {...register("password", { required: "Password is required.." })}
              placeholder="Enter your password"
              className="am-input"
            />
            {errors.password && (
              <p className="errorMsgForm">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="am-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
