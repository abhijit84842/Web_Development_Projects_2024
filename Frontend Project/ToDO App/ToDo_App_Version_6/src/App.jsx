import { useState, useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Todo1 from "./Components/TodoList_one";

//import Todo2 from "./Components/TodoList_two";
import "./App.css";
import WelcomeMessagee from "./Components/WelcomeMessage";

// Reducer=> its a pure function and it take action and current state and based on  return a new state..
const todoReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems; // initial value

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
function App() {
  // create array object..
  const initialtodoItems = [];

  /*const [todoItems, setTodoItems] = useState(initialtodoItems);*/

  // const[state , dispatch]=useReducer(reducer, initialState)
  const [todoItems, dispatchTodoItems] = useReducer(todoReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    // create an action object
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        // object create by javascript shortcut..
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    // create an action object
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        // object create by javascript shortcut..
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        // i want to use this value as a object
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <div className="items_container">
          <AddTodo></AddTodo>

          <WelcomeMessagee></WelcomeMessagee>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
