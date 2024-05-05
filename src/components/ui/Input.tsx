import React from "react";

const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      className="p-2 border px-4 border-primary rounded-xl shadow-lg w-full font-semibold text-sm outline-none"
      {...props}
    />
  );
};

export default Input;
