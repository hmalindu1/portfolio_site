import styles from "../style";
import { tailwind_logo } from "../assets";

/**
 * Represents the TechTailwind component that displays the Tailwind CSS logo that rotates on hover.
 * @returns {JSX.Element} JSX Element that renders the component.
 */
const TechTailwind = () => (
  <div className={`tech-tailwind`}>
    <div className={`tech-tailwind-background ${styles.flexCenter}`}>
      <img src={tailwind_logo} alt="" className={`tech-tailwind-image`} />
    </div>
  </div>
);

export default TechTailwind;