import React from "react";
import Button3 from "./Button3";
import Button from "./Button";
import { Link } from "react-router-dom";

function LetterCard({ i }) {
  return (
    <div>
      <h1 className="text-blue-600 text-xm font-bold "> {i.title}</h1>
      <p className="text-xs text-neutral-700">{i.content.substr(0, 120)}</p>
      <Link to={`/detailPage/${i.id}`}>
        <Button3>Read More</Button3>
      </Link>
    </div>
  );
}

export default LetterCard;
