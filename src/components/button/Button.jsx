
import React from "react";
import "./button.css";

const Button = ({ value, onClick }) => {
  return (
    <button
      className="bg-blue-700 text-center text-zinc-100 w-25 h-10 rounded-md"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
