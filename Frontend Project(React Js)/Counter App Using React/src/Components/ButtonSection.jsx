import styles from "./ButtonSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ButtonSection = ({ onIncrement, onDecrement, onReset }) => {
  return (
    <div className={styles.buttonSection}>
      <button type="button" className="btn btn-success" onClick={onIncrement}>
        Increment
      </button>

      <button type="button" className="btn btn-danger" onClick={onDecrement}>
        Decrement
      </button>

      <button type="button" class="btn btn-warning" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default ButtonSection;
