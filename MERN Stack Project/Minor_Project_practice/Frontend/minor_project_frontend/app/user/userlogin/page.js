"use client";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="flex justify-center text-5xl mt-10">User Login</h1>
      <div className="sub-container flex justify-center mt-20">
        <form className="flex justify-center flex-col gap-5 w-[25rem] bg-zinc-500 p-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 rounded-md outline-none"
            type="text"
            {...register("email", {
              required:"email is required..."
            })}
            placeholder="email id"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            className="p-2 rounded-md outline-none"
            type="text"
            {...register("password" , {
              required:"password is required.."
            })}
            placeholder="password"
          />
           {errors.password && <p>{errors.password.message}</p>}
          <button className="bg-green-500 p-2 rounded-md" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
