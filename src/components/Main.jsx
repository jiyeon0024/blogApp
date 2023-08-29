import React from "react";
import Card from "./Card";
import LetterCard from "./LetterCard";
import SmallCard from "./SmallCard";
import Button2 from "./Button2";

function Main({ data }) {
  return (
    <div className="w-full px-52 ">
      <div className="flex justify-between  items-start mt-8 m-auto">
        <div className="flex gap-[2%] flex-wrap    ">
          {data.map((i, index) => {
            return <Card key={i.title + index} i={i} />;
          })}
        </div>

        <div className="flex flex-col gap-5  ">
          {data.map((i, index) => {
            return (
              <div className="w-60">
                <LetterCard i={i} key={i.title + index} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between mb-3 ">
        <h1 className="text-blue-600 text-lg font-bold ">
          The Science Behind Smart UV
        </h1>
        <Button2>Read Article</Button2>
      </div>

      <div className="flex justify-center flex-wrap gap-10 pb-10">
        {data.map((i, index) => {
          return <SmallCard i={i} key={i.title + index} />;
        })}
      </div>
    </div>
  );
}

export default Main;
