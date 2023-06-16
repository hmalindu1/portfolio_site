import { profile_image } from "../assets";
import styles from "../style";
import TechReact from "./TechReact";
import TechTailwind from "./TechTailwind";
import TechJS from "./TechJS";
import Button from "./Button";
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
      {/* Hero Title */}
      <div className="flex flex-row flex-1 justify-between items-center w-full">
        <h2 className="flex-1 font-poppins font-light ss:text-[30px] text-white">
          Trying to make an impact <br className="sm:block hidden" />{" "}
          <span className="font-poppins font-medium ss:text-[70px] leading-[70px]">
            to the World <span className="earth"></span>
          </span>{" "}
          <br className="sm:block hidden" />{" "}
          <span className="font-poppins font-medium ss:text-[40px] leading-[50px]">
            by making
          </span>{" "}
          <br className="sm:block hidden" />{" "}
          <span className="font-poppins font-medium ss:text-[60px] leading-[70px]">
            Quality Software
          </span>{" "}
          <br className="sm:block hidden" />
        </h2>
      </div>
      {/* Name and image */}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex items-center">
          <h1 className="flex-1 font-poppins font-normal ss:text-[20px] text-dimWhite">
            Hi, I am <br className="sm:block hidden" />{" "}
            <span className="font-thirsty font-medium websmith-gradient ss:text-[70px] leading-[90px]">
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
      <Button styles="mt-10" />
    </div>
    {/* Right side of the hero section */}
    <div
      className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative mr`}
    >
      {/* JavaScript logo */}
      <div className="ss:flex hidden md:mr-4 mr-0 mt-[250px] ml-[-50px]">
        <TechJS />
      </div>
      {/* Profile image */}
      <div className="image-fade w-[65%] h-[100%] ml-[-10px] relative z-[5]">
        <img
          src={profile_image}
          alt="propic"
          className="w-full h-full object-cover"
        />
      </div>
      {/* React logo */}
      <div className="ss:flex hidden md:mr-4 mr-0 ml-[-100px]">
        <TechReact />
      </div>
      {/* Tailwind logo */}
      <div className="ss:flex hidden md:mr-4 mr-0 ml-[-150px] mt-[600px]">
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
