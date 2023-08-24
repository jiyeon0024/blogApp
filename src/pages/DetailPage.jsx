import React from "react";
import Banner2 from "../components/Banner2";

function DetailPage() {
  return (
    <div>
      <Banner2 />
      <div className="flex justify-center  gap-6">
        <img
          src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80"
          alt=""
          className="h-96"
        />
        <p className="w-96 text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi
          ratione molestiae exercitationem voluptates vel, quod similique
          maxime, consequatur magni illo corrupti consequuntur possimus alias!
          Consequatur suscipit facilis ullam quaerat. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quos nisi ratione molestiae
          exercitationem voluptates vel, quod similique maxime, consequatur
          magni illo corrupti consequuntur possimus alias! Consequatur suscipit
          facilis ullam quaerat.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold   mt-9 text-3xl text-center text-neutral-700">
          Common Household Products You Might Use
        </h1>
        <p className="text-center text-neutral-700 mt-3 w-8/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          doloremque modi tempore sed magnam dicta ad sint quam, eveniet
          deserunt dolores voluptates similique quae ea cupiditate eos cumque
          itaque neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla doloremque modi tempore sed magnam dicta ad sint quam, eveniet
          deserunt dolores voluptates similique quae ea cupiditate eos cumque
          itaque neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla doloremque modi tempore sed magnam dicta ad sint quam, eveniet
          deserunt dolores voluptates similique quae ea cupiditate eos cumque
          itaque neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nulla doloremque modi tempore sed magnam dicta ad sint quam, eveniet
          deserunt dolores voluptates similique quae ea cupiditate eos cumque
          itaque neque.
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
