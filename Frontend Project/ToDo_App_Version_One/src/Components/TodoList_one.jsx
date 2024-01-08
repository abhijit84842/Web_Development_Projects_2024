function Todo1({ todoName, todoDate }) {
  // destructring the data
  //let todoName = "";
  //let todoDate = ;
  return (
    <div className="container">
      <div className="row custom_row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">
          <button type="button" className="btn btn-danger custom_button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo1;
