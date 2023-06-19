import { gold_medal, intro_image } from "../assets";
import styles from "../style";

/**
 * Returns a component that renders an introduction card.
 *
 * @returns {JSX.Element} The introduction card component.
 */
const IntroCard = () => (
  <div
    // Apply necessary styles to the card
    className={` ${styles.flexCenter} flex justify-between flex-col px-10 py-12 rounded-[15px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 intro-card`}
  >
    {/* Render the introduction image */}
    <img src={intro_image} alt="" className="w-[250px] object-contain" />
    {/* Render the job title */}
    <p
      className={`${styles.flexCenter} font-poppins font-extralight text-[25px] leading-[px] text-white my-10`}
    >
      {" "}
      Developer + Designer
    </p>
    {/* Render the company name and tagline */}
    <div className="flex flex-row items-baseline gap-[2px]">
      <h1
        className={`websmith-gradient font-thirsty font-extralight text-[50px] text-purple-500 mt-[-40px] ml-[5px] `}
      >
        Websmith
      </h1>
      <h3
        className={`font-poppins font-extralight text-[20px] text-dimWhite mt-[-40px] ml-[5px] `}
      >
        with
      </h3>
    </div>

    {/* Render the awards section */}
    <div
      className={`${styles.flexCenter} flex flex-col md:flex-row gap-5 mt-[-5px] ml-[-10px]`}
    >
      {/* Render the first award */}
      <img src={gold_medal} alt="" className="w-[70px] object-contain" />
      <div className={`${styles.flexCenter} flex flex-col`}>
        <p className={`font-poppins font-extralight text-[18px] text-white`}>
          Taste in Art
        </p>
        <p className={`font-poppins font-extralight text-[18px] text-white`}>
          and Years of
        </p>
        <p className={`font-poppins font-extralight text-[18px] text-white`}>
          Experience!
        </p>
      </div>
    </div>
  </div>
);

export default IntroCard;
