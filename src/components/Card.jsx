import React from "react";
import Button2 from "./Button2";
import { Link } from "react-router-dom";

function Card({ i }) {
  let time = new Date(i.date);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log();
  // console.log(days[time.getDay()]);
  // console.log(month[time.getMonth()]);
  // console.log(time.getFullYear());
  // console.log(time.getDate());

  let day = days[time.getDay()];
  let mon = month[time.getMonth()];
  let year = time.getFullYear();
  let date = time.getDate();

  return (
    <div className="w-full sm:w-[47.5%] lg:w-[30%] h-[400px] mb-10 ">
      <div className="h-2/3 w-full relative">
        <img
          src={i.image}
          alt=""
          className="rounded-md object-cover absolute w-full h-full "
        />
      </div>

      <h1 className="text-blue-600 text-lg font-bold  mt-2 mb-2 ">{i.title}</h1>
      <p className=" text-xs text-neutral-700">{i.content.substr(0, 200)}</p>
      <div className="flex justify-between items-center  mt-2 mb-2 ">
        <Link to={`/detailPage/${i.id}`}>
          <Button2>Read Article</Button2>
        </Link>

        <p className="text-neutral-700 text-xs">{`${date} . ${day} . ${mon} . ${year}`}</p>
      </div>
    </div>
  );
}

export default Card;
