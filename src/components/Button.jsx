import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-white bg-violet-400 p-2 text-s rounded hover:bg-white hover:text-violet-400"
    >
      {props.children}
    </button>
  );
}

export default Button;
