import { profile_image } from "../assets";
import styles from "../style";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-40`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-normal ss:text-[20px] text-dimWhite">
          Hi, I am <br className="sm:block hidden" />{" "}
          <span className="font-thirsty font-medium text-gradient ss:text-[70px] leading-[90px]">
            Hashan
          </span>{" "}
          <br className="sm:block hidden" />
        </h1>
      </div>
      <h1 className="font-poppins font-medium ss:text-[18px] text-white leading-[15px]">
        An experienced and proficient full-stack web developer
      </h1>
      <p
        className={`font-poppins font-normal max-w-[470px] mt-5 text-[15px] text-dimWhite `}
      >
        {" "}
        I love building everything from scratch, Eyecatching UI's to high
        performing server side apps. If you are looking for a developer to get
        your business online or top talent for your team, I am just a message
        away.{" "}
      </p>

      <button
        className={`text-black rounded-full font-poppins mt-5 font-semibold transition-all duration-500 bg-gradient-to-tl from-blue-500 via-purple-500 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100 py-2 px-4 transform hover:scale-110`}
      >
        Contact
      </button>
    </div>
    <div className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative mr`}>
      <img
        src={profile_image}
        alt="propic"
        className="w-[65%] h-[100%] relative z-[5]"
      />
      
    </div>
  </section>
);
export default Hero;
