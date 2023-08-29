import React from "react";
import Card from "./Card";
import LetterCard from "./LetterCard";
import SmallCard from "./SmallCard";
import Button2 from "./Button2";
import Postform from "./Postform";
import Button from "./Button";
import { Link } from "react-router-dom";

function Main({ data }) {
  return (
    <div className="max-w-[90%]  w-[1800px] m-auto">
      <div className="my-2">
        <Link to="/newPost">
          <Button>Create New Post</Button>
        </Link>
      </div>

      <div className="flex justify-between   mt-8 m-auto">
        <div className="flex gap-[2%] flex-wrap   ">
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

      {/* <div className="flex justify-between mb-3 ">
        <h1 className="text-blue-600 text-lg font-bold ">
          The Science Behind Smart UV
        </h1>
        <Button2>Read Article</Button2>
      </div> */}

      {/* <div className="flex justify-center flex-wrap gap-10 pb-10">
        {data.map((i, index) => {
          return <SmallCard i={i} key={i.title + index} />;
        })}
      </div> */}
    </div>
  );
}

export default Main;
