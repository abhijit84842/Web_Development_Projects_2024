import { useContext } from "react";
import Todo1 from "./TodoList_one";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = ({ onDeleteClick }) => {
  const todoItems = useContext(TodoItemsContext);
  console.log(todoItems);
  return (
    <>
      {todoItems.map((list) => (
        <Todo1
          key={list.name}
          todoName={list.name}
          todoDate={list.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
};

export default TodoItems;
