import styles from "../style";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
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

      <button className="transition ease-in-out delay-150 bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-purple-400 duration-300 py-2 px-4 rounded-full font-poppins mt-5 text-black font-semibold">
        Contact
      </button>
    </div>
  </section>
);

export default Hero;
