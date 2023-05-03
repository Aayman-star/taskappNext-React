"use client";
import React from "react";

const Button = (props) => {
  return (
    // <button
    //   type="submit"
    //   className="m-2 px-8 py-2 border-2 border-gray-200 rounded-md shadow-lg">
    //   {display}
    // </button>
    <button
      type="submit"
      className="m-2 px-8 py-2 border-2 border-gray-200 rounded-md shadow-lg"
      onClick={props.onClick}>
      {props.display}
    </button>
  );
};

export default Button;
