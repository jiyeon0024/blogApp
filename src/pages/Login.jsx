import React from "react";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { DbContext } from "../context/DbContext";

function Login() {
  const { login } = useContext(DbContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div className="bg-violet-400 w-[100%] min-h-screen pt-56">
      <form
        onSubmit={submit}
        className="flex flex-col items-center justify-center gap-2  bg-white w-[30%] m-auto rounded p-2 "
      >
        <h1 className="text-3xl mb-3 w-full  ">Login To Your Account</h1>

        <input
          type=""
          placeholder="Enter your ID"
          className="border border-indigo-600 outline-0  rounded p-1 "
          onChange={(e) => setUserName(e.target.value)}
          vlaue={username}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="border border-indigo-600 outline-0  rounded p-1 mb-5"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Login;
