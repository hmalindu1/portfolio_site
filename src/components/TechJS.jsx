import styles from "../style";
import { JS_logo } from "../assets";

/**
 * Renders a JSX component representing a tech JS image with a background.
 *
 * @return {JSX.Element} The rendered JSX component.
 */
const TechJS = () => (
  // container for tech-js component
  <div className={`tech-js`}>
    {/* background div */}
    <div className={`tech-js-background ${styles.flexCenter}`}>
      {/* image of JS logo */}
      <img src={JS_logo} alt="" className={`tech-js-image`} />
    </div>
  </div>
);


export default TechJS;
