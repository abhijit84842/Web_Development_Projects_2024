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
  const onSubmit = (data) => console.log(data);

  return (
    <div className="loginMainContainer">
      <h1>Login Your Account</h1>
      <div className="loginContainer">
        <form className="subContainer" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("email", {
              required: "required field needed",
              pattern: {
                // use email pattert type
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
              onChange: (e) => setValue("email", e.target.value.toLowerCase()), // convert the email in lower case
            })}
            placeholder="Enter your email.."
          />
          <input
            type="text"
            {...register("password")}
            placeholder="Enter your password"
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
