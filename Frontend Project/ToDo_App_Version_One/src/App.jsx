import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Todo1 from "./Components/TodoList_one";
//import Todo2 from "./Components/TodoList_two";
import "./App.css";

function App() {
  // create array object..
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "10/01/2024",
    },
    {
      name: "Go to college",
      dueDate: "08/01/2024",
    },
    {
      name: "Workout",
      dueDate: "10/01/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="items_container">
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
      </div>
    </center>
  );
}

export default App;
