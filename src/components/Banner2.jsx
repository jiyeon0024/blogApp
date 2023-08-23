import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

function Banner2() {
  return (
    <div className=" px-8  py-8  flex flex-col items-center -text-center bg-no-repeat h-150 bg-gradient-to-b from-sky-100 to-zinc-50">
      <h1 className="text-3xl text-blue-600 font-extrabold ">
        Time to Get Your House
      </h1>
      <h1 className="text-3xl text-blue-600 font-extrabold ">
        Clean and in Order
      </h1>
      <p className="py-2 max-w-xl text-neutral-700 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ex
        quisquam, adipisci repellendus ad odit, quia consectetur nesciunt illo
        molestiae at fugit culpa consequatur sed tempora suscipit corporis
        commodi! Ut.
      </p>
      <div className="text-3xl flex gap-5 text-violet-400">
        <AiFillLinkedin className=" rounded-full " />
        <AiFillFacebook className=" rounded-full" />
        <AiFillTwitterSquare className=" rounded-full" />
      </div>
    </div>
  );
}

export default Banner2;
