function AddTodo() {
  return (
    <div class="container">
      <div class="row custom_row">
        <div class="col-4">
          <input type="text" placeholder="Enter Todo here.." />
        </div>

        <div class="col-4">
          <input type="date" />
        </div>

        <div class="col-4">
          <button type="button" class="btn btn-success custom_button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
