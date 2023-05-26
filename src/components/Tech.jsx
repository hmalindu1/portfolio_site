import styles from "../style";
import { react_logo } from "../assets";

const Tech = () => (
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

export default Tech