import React from "react";

function Button2(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-blue-600 text-xs border border-blue-600 p-1 rounded "
    >
      {props.children}
    </button>
  );
}

export default Button2;
