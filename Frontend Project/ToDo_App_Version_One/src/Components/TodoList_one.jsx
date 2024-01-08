function Todo1({ todoName, todoDate }) {
  // destructring the data
  //let todoName = "";
  //let todoDate = ;
  return (
    <div class="container">
      <div class="row custom_row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-4">
          <button type="button" class="btn btn-danger custom_button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo1;
