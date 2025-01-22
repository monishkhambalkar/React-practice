import React, { useReducer, useState } from "react";
import "./App.css";
import { act } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, complete: false },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE":
      return state.map((todo) => {
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch({ type: "ADD", payload: inputValue });
      setInputValue("");
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>TO-DO LISt</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="add new task"
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                margin: "5px 0",
              }}
            >
              <span
                onClick={() => dispatch({ type: "toggle", payload: todo.id })}
                style={{ cursor: "pointer", marginRight: "10px" }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
