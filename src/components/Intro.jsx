import React from "react";
import styles from "../style";
import { IntroCard } from "../components"

const Intro = () => (
  <section className={`flex md:flex-row flex-col`}>
    <div
      className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 mb-40 `}
    >
      <IntroCard/>
    </div>
    <div
      className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative mr`}
    >
      Intro
    </div>
  </section>
);

export default Intro;
