import React from "react";
import { nanoid } from "nanoid";

const ToasticeInput = ({ label, value, onChange }) => {
  const id = nanoid();

  const handleChange = (ev) => {
    onChange((curr) => ({
      ...curr,
      [label]: +ev.target.value === 0 ? false : +ev.target.value,
    }));
  };

  return (
    <div className="flex space-x-2 items-center mb-2">
      <label className="font-semibold cursor-pointer" for={id}>
        {label}
      </label>
      <input
        type="number"
        className="text-[#ff8400] rounded-lg"
        value={value}
        id={id}
        name={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ToasticeInput;
