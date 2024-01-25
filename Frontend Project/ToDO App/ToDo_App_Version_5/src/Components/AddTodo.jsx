import { useContext } from "react";
import { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const constextObj = useContext(TodoItemsContext);
  const addNewItem = constextObj.addNewItem;

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    addNewItem(todoName, dueDate);
    // blank the current value
    setTodoName("");
    setDueDate("");

    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="container">
      <form className="row kgRow" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo here.."
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-success kgButton">
            <MdOutlineAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
