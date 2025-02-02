import React from "react";
import "../Css/createac.css";
import { useForm } from "react-hook-form";

const CreateAc = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let res = await fetch("http://localhost:3002/api/owner/createac", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let rslt = await res.json();
    if (rslt.success) {
      alert("Owner Created Successfully...");
    } else {
      alert("Owner Already Exists..");
    }
  };
  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>Create Admin Account</h2>
        <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              {...register("name", {
                required: "name is required",
              })}
              placeholder="Enter Your name.."
              className="admin-input"
            />
            {errors.name && (
              <p className="errorMsgForm">{errors.name.message}</p>
            )}
          </div>
          <div className="input-group">
            <label>Age</label>
            <input
              type="text"
              {...register("age", {
                required: "age is required",
              })}
              placeholder="Enter your age.."
              className="admin-input"
            />
            {errors.age && <p className="errorMsgForm">{errors.age.message}</p>}
          </div>
          <div className="input-group">
            <label>Email Id</label>
            <input
              type="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: `invalid email..plz follow the pattern => [a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$`,
                },
                onChange: (e) =>
                  setValue("email", e.target.value.toLowerCase()),
              })}
              placeholder="Enter your email.."
              className="admin-input"
            />
            {errors.email && (
              <p className="errorMsgForm">{errors.email.message}</p>
            )}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "Password must contain at least one uppercase, one lowercase, one number, and one special character",
                },
              })}
              placeholder="Enter a new password"
              className="admin-input"
            />
            {errors.password && (
              <p className="errorMsgForm">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="admin-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAc;
