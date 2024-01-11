function Todo1({ todoName, todoDate }) {
  // destructring the data
  //let todoName = "";
  //let todoDate = ;
  return (
    <div className="container">
      <div className="row kgRow">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">
          <button type="button" className="btn btn-danger kgButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo1;
