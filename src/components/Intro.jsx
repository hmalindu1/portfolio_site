import styles from "../style";
import { IntroCard } from "../components"

/**
 * Renders an introduction section with a card and some text.
 */
const Intro = () => {
  return (
    <section className={`flex md:flex-row flex-col`}>
      {/* Card container */}
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 mb-40 `}>
        <IntroCard/>
      </div>
      {/* Text container */}
      <div className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative mr`}>
        Intro
      </div>
    </section>
  );
}

export default Intro;
