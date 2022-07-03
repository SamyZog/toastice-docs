import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    description: (
      <>Easy and simple toast system for any modern React project.</>
    ),
  },
  {
    title: "Flexible and Pretty",
    description: (
      <>
        Offers a lot of customization, change colors, behavior and animations on
        the fly.
      </>
    ),
  },
  {
    title: "Event Driven and Fully Typed",
    description: (
      <>
        No Context API, no need to use hooks. Optimized and fully typed out of
        the box.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
