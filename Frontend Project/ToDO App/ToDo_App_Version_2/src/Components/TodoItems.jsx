import Todo1 from "./TodoList_one";
const TodoItems = ({ todoItems, onDeleteClick }) => {
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
