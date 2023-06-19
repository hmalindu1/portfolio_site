/**
 * Renders a button component with specified styles
 * @param {Object} props - The props object containing styles
 * @returns {JSX.Element} - The button component
 */
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      // Use template literals for better readability
      className={`
        text-black 
        rounded-full 
        font-poppins 
        mt-5 
        font-semibold 
        transition-all 
        duration-500 
        bg-gradient-to-tl 
        from-blue-500 
        via-purple-500 
        to-blue-500 
        bg-size-200 
        bg-pos-0 
        hover:bg-pos-100 
        py-2 
        px-4 
        transform 
        hover:scale-110
      `}
    >
      Contact
    </button>
  );
}

export default Button