import { MdDeleteForever } from "react-icons/md";

function Todo1({ todoName, todoDate, onDeleteClick }) {
  // destructring the data
  //let todoName = "";
  //let todoDate = ;
  return (
    <div className="container">
      <div className="row kgRow">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-danger kgButton"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo1;
