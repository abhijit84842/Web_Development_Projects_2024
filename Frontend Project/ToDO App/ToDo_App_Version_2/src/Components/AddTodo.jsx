import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);

    // blank the current value
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container">
      <div className="row kgRow">
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
          <button
            type="button"
            className="btn btn-success kgButton"
            onClick={() => handleAddButtonClicked()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
