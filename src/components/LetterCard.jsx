import React from "react";
import Button3 from "./Button3";
import Button from "./Button";
import { Link } from "react-router-dom";

function LetterCard() {
  return (
    <div>
      <h1 className="text-blue-600 text-xs font-bold ">UV Light at Home</h1>
      <p className="w-80">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus
        eaque, adipisci quos culpa facilis aut architecto magni ipsa fugit vel
      </p>
      <Link to="/detailPage">
        <Button3>Read More</Button3>
      </Link>
    </div>
  );
}

export default LetterCard;
