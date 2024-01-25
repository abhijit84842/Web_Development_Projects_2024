import { useState, useRef } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

function AddTodo({ onNewItem }) {
  /*
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
*/

  // use useRef hooks
  // useRef for to get name..
  const todoNameElement = useRef();
  //useRef for to get date..
  const dueDateElement = useRef();

  /*
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
*/
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    // to blank the current value..
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    console.log(
      `the currennt name is ${todoName} and the current value is ${dueDate}`
    );
    onNewItem(todoName, dueDate);

    /*
    // blank the current value
    setTodoName("");
    setDueDate("");

    event.preventDefault();
    console.log(event);
    */
  };
  return (
    <div className="container">
      <form className="row kgRow" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here.."
            //value={todoName}

            //onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            //value={dueDate}
            //onChange={handleDateChange}
          />
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
