import React, { useRef, useState } from "react";
import { ToasticeContainer, toast } from "toastice";
import "toastice/toastice.css";
import ToasticeCheckbox from "../ToasticeCheckbox";
import ToasticeEmitButton from "../ToasticeEmitButton";
import ToasticeInput from "../ToasticeInput";
import ToasticeRadio from "../ToasticeRadio";

const types = ["default", "success", "error", "warning", "info"];
const themes = ["filled", "outlined", "glass"];
const animations = ["pop", "slide", "fade"];
const positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];
const margins = ["normal", "dense"];
const autoClose = [5000, false];
const booleans = [
  "pauseOnHover",
  "closeOnClick",
  "showCloseButton",
  "showIcon",
  "elevated",
  "newestOnTop",
  "compact",
];
const inputs = ["autoClose", "limit", "delay"];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Toastice = () => {
  const id = useRef();

  const [isRandom, setIsRandom] = useState(false);
  const [defaultToastProps, setDefaultToastProps] = React.useState({
    delay: 0,
    onClose: undefined,
    onOpen: undefined,
    onProgress: undefined,
    type: "default",
    theme: "filled",
    animation: "pop",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    position: "bottom-right",
    showCloseButton: true,
    showIcon: true,
    role: "alert",
    elevated: true,
  });

  const [containerDefaultProps, setContainerDefaultProps] = React.useState({
    margin: "normal",
    newestOnTop: false,
    limit: 3,
    compact: false,
  });

  const showToastice = () => {
    setIsRandom(false);

    id.current = toast("Hello World", defaultToastProps);
  };

  const randomToastice = () => {
    setIsRandom(true);

    toast("Random Toastice", {
      type: types[getRandomInt(0, types.length - 1)],
      theme: themes[getRandomInt(0, themes.length - 1)],
      animation: animations[getRandomInt(0, animations.length - 1)],
      position: positions[getRandomInt(0, positions.length - 1)],
      autoClose: autoClose[getRandomInt(0, autoClose.length - 1)],
    });
  };

  const updateToastice = () => {
    toast.update(id.current, defaultToastProps);
  };

  const dismissAll = () => toast.dismiss();

  return (
    <>
      <div className="custom">
        <div>
          <form>
            <ToasticeRadio
              options={types}
              onChange={setDefaultToastProps}
              defaultToastProps={defaultToastProps}
              legend="type"
            />
            <ToasticeRadio
              options={themes}
              onChange={setDefaultToastProps}
              defaultToastProps={defaultToastProps}
              legend="theme"
            />
            <ToasticeRadio
              options={animations}
              onChange={setDefaultToastProps}
              defaultToastProps={defaultToastProps}
              legend="animation"
            />
            <ToasticeRadio
              options={positions}
              onChange={setDefaultToastProps}
              defaultToastProps={defaultToastProps}
              legend="position"
            />
            <ToasticeRadio
              options={margins}
              onChange={setContainerDefaultProps}
              defaultToastProps={containerDefaultProps}
              legend="margin"
            />
            <fieldset className="my-6">
              <legend className="text-xl font-bold capitalize mb-2">
                Inputs
              </legend>
              <div className="sm:!columns-2 md:!columns-3">
                {inputs.map((input) => {
                  return (
                    <ToasticeInput
                      key={input}
                      label={input}
                      value={
                        input === "limit"
                          ? containerDefaultProps[input]
                          : defaultToastProps[input]
                      }
                      onChange={
                        input === "limit"
                          ? setContainerDefaultProps
                          : setDefaultToastProps
                      }
                    />
                  );
                })}
              </div>
            </fieldset>
            <fieldset className="my-6">
              <legend className="text-xl font-bold capitalize mb-2">
                Boolean Values
              </legend>
              <div className="sm:!columns-2 columns-1">
                {booleans.map((boolean) => {
                  return (
                    <ToasticeCheckbox
                      key={boolean}
                      label={boolean}
                      checked={defaultToastProps[boolean]}
                      onChange={
                        boolean === "newestOnTop" || boolean === "compact"
                          ? setContainerDefaultProps
                          : setDefaultToastProps
                      }
                    />
                  );
                })}
              </div>
            </fieldset>
          </form>
        </div>
        <div className="grid sm:!grid-cols-4 grid-cols-2 justify-center gap-x-5 gap-y-5">
          <ToasticeEmitButton onClick={showToastice} label="SHOW" />
          <ToasticeEmitButton onClick={randomToastice} label="RANDOMIZE" />
          <ToasticeEmitButton onClick={updateToastice} label="UPDATE" />
          <ToasticeEmitButton onClick={dismissAll} label="DISMISS ALL" />
        </div>
      </div>
      <ToasticeContainer
        {...containerDefaultProps}
        limit={isRandom ? false : containerDefaultProps.limit}
      />
    </>
  );
};

export default Toastice;
