---
sidebar_position: 1
---

# Getting Started

`Toastice` is a small [8.4kB](https://bundlephobia.com/package/toastice@1.0.0) gzipped library that makes adding toasts to your project, easy and simple. It is written in `typescript` so it is fully typed.

## Features

- Simple and easy to start using β¨
- Can choose between different themes π
- Several in & out animations ποΈ
- Multiple severity (color) levels π
- Automatically or manually dismissible π
- Ability to pause countdown on hover β±οΈ
- Countdown automatically pauses when browser tab is inactive βΈοΈ
- Can hook into the toasts lifecycle with the `onOpen` and `onClose` callbacks βοΈ
- Limit the number of displayed toasts β
- Queueable toasts minimize a cluttered interface β»οΈ
- Countdown is visible through a progressbar π
- Update toasts on the fly π
- Big choice of visual customization options π
- Control stacking order (top or bottom) π€
- Prevent duplicate toasts β

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
