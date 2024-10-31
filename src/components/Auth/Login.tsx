"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("first", email);
    console.log("scnd", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div
      className={`h-screen  relative w-full flex text-zinc-300 lg:justify-between items-center lg:px-16 md:px-10 px-4`}
    >
      <div className="lg:flex hidden flex-col justify-center text-8xl tracking-tighter leading-none">
        <h1 className={`text-zinc-700 font-bold`}>OWN THE</h1>
        <span className="code">code</span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-5xl tracking-tighter ">Welcome to Easy-EMS</h1>
        <p className="text-xs text-zinc-500 tracking-tight">
          An employee management system for assignment
        </p>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex mt-3 flex-col gap-4"
        >
          <input
            value={email}
            className="textInput"
            placeholder="Email"
            required
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            value={password}
            className="textInput"
            placeholder="Password"
            required
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Login" className="buttonFilled" />
        </form>
      </div>
    </div>
  );
};

export default Login;
