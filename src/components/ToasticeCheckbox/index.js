import React from "react";
import { nanoid } from "nanoid";

const ToasticeCheckbox = ({ label, value, onChange, checked }) => {
  const id = nanoid();

  const handleChange = (ev) => {
    onChange((curr) => ({ ...curr, [label]: ev.target.checked }));
  };

  return (
    <div className="flex space-x-2 items-center mb-2">
      <label className="font-semibold cursor-pointer" for={id}>
        {label}
      </label>
      <input
        type="checkbox"
        className="text-[#ff8400]"
        value={value}
        id={id}
        name={value}
        onChange={handleChange}
        checked={checked}
      />
    </div>
  );
};

export default ToasticeCheckbox;
