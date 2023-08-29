import React from "react";

function Nav() {
  return (
    <div className="flex justify-between items-center px-52 py-2">
      <div className="text-blue-600 text-2xl font-bold ">SmartUV.</div>
      <div>
        <ul className="flex gap-5 text-neutral-700 justify-center items-center">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
