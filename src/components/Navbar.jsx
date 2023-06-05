import { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ul
        className="font-thirsty font-medium text-white cursor-pointer text-[25px]       relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-[3px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-500
                before:to-purple-500
                hover:before:w-full
                hover:before:opacity-100"
      >
        Hashan M. Hemachandra
      </ul>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } relative
                transition-all
                duration-400
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-[3px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-400
                before:bg-gradient-to-r
                before:from-blue-500
                before:to-purple-500
                hover:before:w-full
                hover:before:opacity-100
                z-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-2"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
