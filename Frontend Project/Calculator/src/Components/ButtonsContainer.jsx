import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonContainer}>
        {ButtonName.map((list) => (
          <button
            className={styles.button}
            key={list}
            onClick={() => onButtonClick(list)}
          >
            {list}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonsContainer;
