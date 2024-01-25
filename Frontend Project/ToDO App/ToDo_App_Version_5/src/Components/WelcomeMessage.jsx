import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className={styles.kgWelcomeMsg}>Enjoy Your Day ..</p>
    )
  );
};

export default WelcomeMessage;
