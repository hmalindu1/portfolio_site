import styles from "../style";
import { react_logo } from "../assets";

const TechReact = () => (
  <div className={`tech-react`}>
    <div className={`tech-react-background ${styles.flexCenter}`}>
      <img
        src={react_logo}
        alt=""
        className={`tech-react-image`}
      />
    </div>
  </div>
);

export default TechReact