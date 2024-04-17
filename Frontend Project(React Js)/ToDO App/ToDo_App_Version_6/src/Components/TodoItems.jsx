import { useContext } from "react";
import Todo1 from "./TodoList_one";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  console.log(`Context todo ${todoItems}`);
  const deleteItem = contextObj.deleteItem;
  //console.log(todoItems);
  return (
    <>
      {todoItems.map((list) => (
        <Todo1
          key={list.name}
          todoName={list.name}
          todoDate={list.dueDate}
          onDeleteClick={deleteItem}
        />
      ))}
    </>
  );
};

export default TodoItems;
