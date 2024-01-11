import Todo1 from "./TodoList_one";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((list) => (
        <Todo1 todoName={list.name} todoDate={list.dueDate} />
      ))}
    </>
  );
};

export default TodoItems;
