---
sidebar_position: 1
---

# Getting Started

`Toastice` is a small [8.4kB](https://bundlephobia.com/package/toastice@1.0.0) gzipped library that makes adding toasts to your project, easy and simple. It is written in `typescript` so it is fully typed.

## Features

- Simple and easy to start using ✨
- Can choose between different themes 💅
- Several in & out animations 🎞️
- Multiple severity (color) levels 🌈
- Automatically or manually dismissible 👋
- Ability to pause countdown on hover ⏱️
- Countdown automatically pauses when browser tab is inactive ⏸️
- Can hook into the toasts lifecycle with the `onOpen` and `onClose` callbacks ⏏️
- Limit the number of displayed toasts ✋
- Queueable toasts minimize a cluttered interface ♻️
- Countdown is visible through a progressbar 👟
- Update toasts on the fly 🚀
- Big choice of visual customization options 💄
- Control stacking order (top or bottom) 📤
- Prevent duplicate toasts ♊

... and much more!

## Installation

`Toastice` is available as an [npm package](https://www.npmjs.com/package/toastice).

To install, just run the command below

**npm**:

```bash
npm install toastice@latest
```

**yarn**:

```bash
yarn add toastice@latest
```

## ToasticeContainer

After successfully completing the step above, import the `ToasticeContainer` component and the `toast` function into your `index` file, do not forget to import the `css` file:

```jsx
import { ToasticeContainer, toast } from "toastice";
import "toastice/toastice.css";

const App = () => {
  const showToastice = () => {
    toast("Hello World");
  };

  return (
    <>
      <button onClick={showToastice}>Show Toastice</button>
      <ToasticeContainer />
    </>
  );
};
```

:::info

The `ToasticeContainer` acts as a hub to generate toasts on the screen, it should be rendered once in your application, preferably at the root of your app.

:::

<br/>

<br/>
<br/>

<p style={{ fontWeight: "bold", fontSize: "20px" }}>License</p>
Licensed under MIT
