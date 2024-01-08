import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Todo1 from "./Components/TodoList_one";
//import Todo2 from "./Components/TodoList_two";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="items_container">
        <AddTodo></AddTodo>
        <Todo1 todoName="Buy Milk" todoDate="03/01/2024" />
        <Todo1 todoName="Go to college" todoDate="08/01/2024" />
      </div>
    </center>
  );
}

export default App;
