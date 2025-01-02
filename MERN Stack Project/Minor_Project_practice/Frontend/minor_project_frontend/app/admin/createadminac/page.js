"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const [submitBtn, setSubmitBtn] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitBtn(false);
  };
  return (
    <div>
      <h1 className="flex justify-center mt-10 text-5xl">
        Create Admin Account
      </h1>
      <div className="sub-container  p-5 flex justify-center">
        <form
          className="w-[40rem] flex justify-center flex-col gap-10 bg-zinc-800 mt-10 rounded-md p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="p-2 text-black outline-none rounded-md"
            type="text"
            {...register("name", {
              required: "name is required..",
              maxLength: {
                value: 20,
                message: "maximum allow 20 charecter..",
              },
            })}
            placeholder="full name"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            className="p-2 text-black outline-none rounded-md"
            type="text"
            {...register("email", {
              required: "email is required..",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message:
                  "invalid email! ..plz follow the pattern => [a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
              },
            })}
            placeholder="email id"
          />
          {errors.email && <p>{errors.email.message}</p>}

          <input
             className="p-2 text-black outline-none rounded-md"
            type="password"
            placeholder="password"

            {...register("password", {
              required:"password is required",
              minLength: {
                value: 8,
                message: "Password length must be 8 character",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Password must include at least one letter, one number, and one special character.",
              },
             
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <input
            className="p-2 text-black outline-none rounded-md"
            type="number"
            {...register("phno", {
              required: "ph no required..",
              maxLength: {
                value: 10,
                message: "only allow 10 digits..",
              },
              minLength: {
                value: 10,
                message: "minimum need 10 digits..",
              },
            })}
            placeholder="ph no"
          />
          {errors.phno && <p>{errors.phno.message}</p>}
          {submitBtn ? (
            <button
              className="bg-green-500 p-2 text-2xl rounded-md"
              type="submit"
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-red-500 p-2 text-2xl rounded-md blur-[1px]"
              type="submit"
              disabled={true}
            >
              Submited
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default page;
