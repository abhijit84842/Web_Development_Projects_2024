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
  };

  return (
    <div className="loginMainContainer">
      <h1>Login Your Account</h1>
      <div className="loginContainer">
        <form className="subContainer" onSubmit={handleSubmit(onSubmit)}>
          <input /* Email section validation  */
            type="text"
            {...register("email", {
              required: "Email is required...",
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
            {...register("password", { required: "Password is required.." })}
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
