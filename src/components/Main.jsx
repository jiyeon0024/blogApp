import React from "react";
import Card from "./Card";
import LetterCard from "./LetterCard";
import SmallCard from "./SmallCard";
import Button2 from "./Button2";

function Main() {
  return (
    <div className="w-full">
      <div className="flex gap-7 justify-center mt-8 ">
        <Card />
        <Card />
        <div className="flex flex-col gap-3">
          <LetterCard />
          <LetterCard />
          <LetterCard />
        </div>
      </div>
      <div className="flex justify-between mt-8 mb-3  max-w-screen-xl m-auto pl-16 pr-16">
        <h1 className="text-blue-600 text-lg font-bold ">
          The Science Behind Smart UV
        </h1>
        <Button2>Read Article</Button2>
      </div>

      <div className="flex justify-center gap-16 pb-10">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
}

export default Main;
