import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext([]);

//
const todoItemsReducer = (currTodoItems, action) => {
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

// create a componenet where we store all state management code..
const TodoItemsContextProvider = ({ children }) => {
  // const[state , dispatch]=useReducer(reducer, initialState)
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

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
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
