//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import TodoItemsContextProvider from "./store/todo-items-store";

//import Todo2 from "./Components/TodoList_two";
import "./App.css";
import WelcomeMessagee from "./Components/WelcomeMessage";

// Reducer=> its a pure function and it take action and current state and based on  return a new state..

function App() {
  /*
  // create array object..
  //const initialtodoItems = [];

  //const [todoItems, setTodoItems] = useState(initialtodoItems); */

  return (
    <TodoItemsContextProvider>
      {" "}
      <center className="todo-container">
        <AppName></AppName>
        <div className="items_container">
          <AddTodo></AddTodo>

          <WelcomeMessagee></WelcomeMessagee>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContextProvider>
    /*
     */
  );
}

export default App;
