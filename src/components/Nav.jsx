import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DbContext } from "../context/DbContext";

function Nav() {
  const { user, logout, loggedIn } = useContext(DbContext);
  console.log(user);
  return (
    <div className="flex justify-between items-center  py-2 max-w-[90%]  w-[1800px] m-auto">
      <div className="text-blue-600 text-2xl font-bold ">SmartUV.</div>
      <div>
        <ul className="flex gap-5 text-neutral-700 justify-center items-center">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Blog</li>
          {loggedIn ? (
            <div className="flex gap-5 ">
              <li onClick={logout} className="cursor-pointer">
                Logout
              </li>
              <p className="text-blue-500 border border-blue-400 rounded px-2">
                {user.username}
              </p>
            </div>
          ) : (
            <Link to={"/login"}>
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
