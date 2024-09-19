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

  const onSubmit = (data) => console.log(data);
  return (
    <div className="acMainContainer">
      <h1>Create Your Ac</h1>
      <form className="formTag" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputFileds">
          <input
            type="text"
            {...register("name", {
              required: "name is required",
            })}
            placeholder="Enter Your name.."
          />
          {errors.name && <p className="errorMsgForm">{errors.name.message}</p>}
          <input
            type="text"
            {...register("age", {
              required: "age is required",
            })}
            placeholder="Enter your age.."
          />
          {errors.age && <p className="errorMsgForm">{errors.age.message}</p>}
          <input
            type="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: `invalid email..plz follow the pattern => [a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$`,
              },
              onChange: (e) => setValue("email", e.target.value.toLowerCase()),
            })}
            placeholder="Enter your email.."
          />
          {errors.email && (
            <p className="errorMsgForm">{errors.email.message}</p>
          )}

          <input
            type="text"
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
          />
          {errors.password && (
            <p className="errorMsgForm">{errors.password.message}</p>
          )}
          <button type="submit" className="submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAc;
