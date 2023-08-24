import React from "react";
import Button2 from "./Button2";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="flex flex-col gap-3">
      <img
        src="https://images.unsplash.com/photo-1616873424982-e406f6af8eef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="bg-violet-400 w-96 h-60 rounded-md"
      />
      <h1 className="text-blue-600 text-lg font-bold w-52">
        Time to Get Your House Clean and in Order
      </h1>
      <p className="w-96 text-xs text-neutral-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni
        animi temporibus ipsam ullam laudantium? Saepe qui officia, quia,
        repudiandae pariatur, quo delectus necessitatibus mollitia quam
        reiciendis tempore! Doloremque, sapiente.
      </p>
      <Link to="/detailPage">
        <Button2>Read Article</Button2>
      </Link>
    </div>
  );
}

export default Card;
