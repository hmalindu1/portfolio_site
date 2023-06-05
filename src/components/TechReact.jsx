import styles from "../style";
import { react_logo } from "../assets";

const TechReact = () => (
  <div className={`tech`}>
    <div className={`tech-background ${styles.flexCenter}`}>
      <img
        src={react_logo}
        alt=""
        className={`tech-image`}
      />
    </div>
  </div>
);

export default TechReact