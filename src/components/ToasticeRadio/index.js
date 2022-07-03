import React from "react";
import { nanoid } from "nanoid";

const ToasticeRadio = ({ onChange, options, defaultToastProps, legend }) => {
  const onValueChange = (ev) => {
    onChange((curr) => ({ ...curr, [legend]: ev.target.value }));
  };

  return (
    <fieldset className="my-10">
      <legend className="text-xl font-bold mb-2">{legend}</legend>
      <div className="flex flex-wrap justify-start items-center space-x-6">
        {options.map((option) => {
          const id = nanoid();

          return (
            <div
              key={option}
              className="flex justify-center items-center space-x-2"
            >
              <label className="font-semibold cursor-pointer" for={id}>
                {option}
              </label>
              <input
                className="text-[#ff8400]"
                onChange={onValueChange}
                type="radio"
                id={id}
                name={option}
                value={option}
                checked={option === defaultToastProps[legend]}
              />
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default ToasticeRadio;
