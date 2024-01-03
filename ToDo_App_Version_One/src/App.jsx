import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Todo1 from "./Components/TodoList_one";
import Todo2 from "./Components/TodoList_two";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <Todo1 />
      <Todo2></Todo2>
    </center>
  );
}

export default App;
