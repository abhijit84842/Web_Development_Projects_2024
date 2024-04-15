import styles from "./Display.module.css";

const Display = ({ countNumber }) => {
  return (
    <div className={styles.displayContainer}>
      <div className={styles.display}>Counter Number is : {countNumber}</div>
    </div>
  );
};

export default Display;
