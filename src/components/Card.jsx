import React from "react";
import Button2 from "./Button2";

function Card() {
  return (
    <div className="flex flex-col gap-2">
      <img src="" alt="" className="bg-violet-400 w-80 h-60 rounded-md" />
      <h1 className="text-blue-600 text-lg font-bold w-52">
        Time to Get Your House Clean and in Order
      </h1>
      <p className="w-80 text-xs text-neutral-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni
        animi temporibus ipsam ullam laudantium? Saepe qui officia, quia,
        repudiandae pariatur, quo delectus necessitatibus mollitia quam
        reiciendis tempore! Doloremque, sapiente.
      </p>
      <Button2>Read Article</Button2>
    </div>
  );
}

export default Card;
