import React from "react";
import Button from "./Button";

function Banner() {
  return (
    <div className="  h-[50vh] bg-no-repeat m-auto bg-cover  bg-center   bg-[url('https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')]">
      <div className="max-w-[90%] w-[1800px] m-auto h-full  flex flex-col items-start justify-center">
        <h1 className="text-3xl text-blue-600 font-extrabold">
          Time to Get Your House
        </h1>
        <h1 className="text-3xl text-blue-600 font-extrabold">
          Clean and in Order
        </h1>
        <p className="py-2 max-w-xl text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          ex quisquam, adipisci repellendus ad odit, quia consectetur nesciunt
          illo molestiae at fugit culpa consequatur sed tempora suscipit
          corporis commodi! Ut.
        </p>
        <Button>Read Article</Button>
      </div>
    </div>
  );
}

export default Banner;
