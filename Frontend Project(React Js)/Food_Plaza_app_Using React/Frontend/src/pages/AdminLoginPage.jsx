import "../Css/login.css";

// import useForm hook
import { useForm } from "react-hook-form";

const AdminLoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // to get the form data
  const onSubmit = async (data) => {
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="loginMainContainer">
      <h1>Login Your Account</h1>
      <div className="loginContainer">
        <form className="subContainer" onSubmit={handleSubmit(onSubmit)}>
          <input /* Email section validation  */
            type="text"
            {...register("email", {
              required: "field is required...",
              pattern: {
                // use email pattert type
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
              onChange: (e) => setValue("email", e.target.value.toLowerCase()), // convert the email in lower case
            })}
            placeholder="Enter your email.."
          />
          {errors.email && (
            <p className="errorMsgForm">{errors.email.message}</p>
          )}
          <input /* Password section validation  */
            type="text"
            {...register("password", { required: "field is required.." })}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="errorMsgForm">{errors.password.message}</p>
          )}
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
