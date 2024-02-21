
import React from "react";
import "./input.css";

const Input = ({ type, id, value, onChange, className }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`border border-gray-200 px-4 py-2 rounded-md ${className}`}
    />
  );
};

export default Input;
