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
  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:3001/admin/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // include cookies
      body: JSON.stringify(data),
    });
    let result = await res.json()
    if(result.success){
      alert(result.msg)
    }else{
      alert(result.msg)
    }
  };
  return (
    <div>
      <h1 className="flex justify-center text-5xl mt-10">Admin Login</h1>
      <div className="sub-container flex justify-center mt-20">
        <form
          className="flex justify-center flex-col gap-5 w-[25rem] bg-zinc-800 p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="p-2 rounded-md outline-none text-black"
            type="text"
            {...register("email", {
              required: "email is required...",
            })}
            placeholder="email id"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            className="p-2 rounded-md outline-none text-black"
            type="password"
            {...register("password", {
              required: "password is required..",
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
