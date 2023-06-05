import { profile_image } from "../assets";
import styles from "../style";
import TechReact from "./TechReact";
import TechTailwind from "./TechTailwind";

/**
 * Renders the hero section of the webpage with a profile image, name, job description, and contact button.
 *
 * @return {JSX.Element} The hero section JSX
 */
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Left side of the hero section */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-40 `}
    >
      {/* Name and image */}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex items-center">
          <h1 className="flex-1 font-poppins font-normal ss:text-[20px] text-dimWhite">
            Hi, I am <br className="sm:block hidden" />{" "}
            <span className="font-thirsty font-medium text-gradient ss:text-[70px] leading-[90px]">
              Hashan
            </span>{" "}
            <br className="sm:block hidden" />
          </h1>
        </div>
      </div>
      {/* Job description */}
      <h1 className="font-poppins font-medium ss:text-[18px] text-white leading-[15px]">
        An experienced and proficient full-stack web developer
      </h1>
      {/* Bio */}
      <p
        className={`font-poppins font-normal max-w-[470px] mt-5 text-[15px] text-dimWhite `}
      >
        {" "}
        I love building everything from scratch, Eyecatching UI's to high
        performing server side apps. If you are looking for a developer to get
        your business online or top talent for your team, I am just a message
        away.{" "}
      </p>
      {/* Contact button */}
      <button
        className={`text-black rounded-full font-poppins mt-5 font-semibold transition-all duration-500 bg-gradient-to-tl from-blue-500 via-purple-500 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100 py-2 px-4 transform hover:scale-110`}
      >
        Contact
      </button>
    </div>
    {/* Right side of the hero section */}
    <div
      className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative mr`}
    >
      {/* Profile image */}
      <img
        src={profile_image}
        alt="propic"
        className="w-[65%] h-[100%] relative z-[5]"
      />
      {/* React logo */}
      <div className="ss:flex hidden md:mr-4 mr-0 ml-[-50px]">
        <TechReact />
      </div>
      {/* Tailwind logo */}
      <div className="ss:flex hidden md:mr-4 mr-0 ml-[-200px] mt-[600px]">
        <TechTailwind />
      </div>
      {/* Background gradients */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);


export default Hero;
