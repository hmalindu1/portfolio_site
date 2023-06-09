import React from 'react'

const Button = ({styles}) => {
  return (
    <button
      type="button"
      className={`text-black rounded-full font-poppins mt-5 font-semibold transition-all duration-500 bg-gradient-to-tl from-blue-500 via-purple-500 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100 py-2 px-4 transform hover:scale-110`}
    >
      Contact
    </button>
  );
}

export default Button