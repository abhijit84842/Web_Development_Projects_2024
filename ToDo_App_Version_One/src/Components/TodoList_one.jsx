function Todo1() {
  let todoName = "Buy Milk";
  let todoDate = "03/01/2024";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-4">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo1;
