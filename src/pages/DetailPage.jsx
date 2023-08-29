import React, { useState, useEffect } from "react";
import Banner2 from "../components/Banner2";
import Nav from "../components/Nav";
import api from "../api/api";
import { useParams } from "react-router";
function DetailPage() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  console.log(id);
  useEffect(() => {
    (async () => {
      let data = await api.get("posts/" + id);
      setData(data);
      console.log(data);
    })();
  }, []);

  const handleRemove = async () => {
    let res = await api.delete(`posts?id=${id}`);
  };

  return (
    <div>
      <Nav />
      <Banner2 />
      <h1 className="font-extrabold   mt-9 text-3xl text-center text-neutral-700 p-2">
        {data.title}
      </h1>
      <div className="flex justify-center  gap-6">
        <img src={data.image} alt="" className="h-96" />
        <p className="w-96 text-neutral-700">{data.content}</p>
      </div>
      <div className="flex flex-col items-center"></div>
      <button onClick={handleRemove}>DELETE POST </button>
    </div>
  );
}

export default DetailPage;
