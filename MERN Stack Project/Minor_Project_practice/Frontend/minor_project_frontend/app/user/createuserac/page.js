"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="flex justify-center mt-10 text-5xl">
        Create User Account
      </h1>
      <div className="sub-container  p-5 flex justify-center">
        <form
          className="w-[40rem] flex justify-center flex-col gap-10 bg-zinc-500 mt-10 rounded-md p-5"
          action=""
        >
          <input className="p-2" type="text" placeholder="full name"/>
          <input className="p-2" type="text" placeholder="age"/>
          <input className="p-2" type="text" placeholder="email id"/>
          <input className="p-2" type="text"  placeholder="ph no" />
          <button className="bg-green-500 p-2 text-2xl rounded-md" type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
};

export default page;
