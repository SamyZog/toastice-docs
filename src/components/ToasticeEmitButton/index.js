import React from "react";

const ToasticeEmitButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#ff8400] py-3 px-3 font-bold rounded-md truncate"
    >
      {label}
    </button>
  );
};

export default ToasticeEmitButton;
