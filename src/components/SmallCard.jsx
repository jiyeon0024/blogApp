import React from "react";
import Button2 from "./Button2";
import { Link } from "react-router-dom";

function SmallCard({ i }) {
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

  let day = days[time.getDay()];
  let mon = month[time.getMonth()];
  let year = time.getFullYear();
  let date = time.getDate();

  return (
    // <div className="flex flex-col ">
    //   <div className="h-2/3 w-full relative">
    //     <img
    //       src={i.image}
    //       alt=""
    //       className=" rounded-md object-cover absolute w-full h-full"
    //     />
    //   </div>

    //   <h1 className="text-blue-600 text-lg font-bold w-52">{i.title}</h1>
    //   <p className="w-60 text-xs text-neutral-700">
    //     {i.content.substr(0, 200)}
    //   </p>
    //   <Link to={`/detailPage/${i.id}`}>
    //     <Button2>Read Article</Button2>
    //   </Link>
    // </div>
    <div className="w-full sm:w-[35.5%] lg:w-[20%] h-[320px] mb-10 ">
      <div className="h-2/3 w-full relative">
        <img
          src={i.image}
          alt=""
          className="rounded-md object-cover absolute w-full h-full "
        />
      </div>

      <h1 className="text-blue-600 text-lg font-bold  mt-2 mb-2 ">{i.title}</h1>
      <p className=" text-xs text-neutral-700">{i.content.substr(0, 100)}</p>
      <div className="flex justify-between items-center  mt-2 mb-2 ">
        <Link to={`/detailPage/${i.id}`}>
          <Button2>Read Article</Button2>
        </Link>

        <p className="text-neutral-700 text-xs">{`${date} . ${day} . ${mon} . ${year}`}</p>
      </div>
    </div>
  );
}

export default SmallCard;
