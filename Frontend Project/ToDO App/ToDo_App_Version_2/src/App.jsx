import { useState } from "react";
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Todo1 from "./Components/TodoList_one";

//import Todo2 from "./Components/TodoList_two";
import "./App.css";
import WelcomeMessagee from "./Components/WelcomeMessage";

function App() {
  // create array object..
  const initialtodoItems = [];

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added : ${itemName} Date is :  ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item deleted ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="items_container">
        <AddTodo onNewItem={handleNewItem}></AddTodo>

        {todoItems.length === 0 && <WelcomeMessagee></WelcomeMessagee>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
