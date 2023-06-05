import styles from "../style";
import { react_logo } from "../assets";

/**
 * Renders a React tech component
 * @returns {JSX.Element} A React component
 */
const TechReact = () => (
  <div className={`tech-react`}>
    {/* Background */}
    <div className={`tech-react-background ${styles.flexCenter}`}>
      {/* Image */}
      <img
        src={react_logo} // React logo
        alt="" // Empty alt attribute
        className={`tech-react-image`}
      />
    </div>
  </div>
);


export default TechReact