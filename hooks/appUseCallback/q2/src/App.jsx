import React, { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //( memoized) usecallback
  // const addTodoList = useCallback(() => {
  //   if (inputValue.trim() === "") return;
  //   setList((prevList) => [...prevList, inputValue]);
  //   setInputValue("");
  //   console.log("Hello");
  // }, [inputValue]);

  // Regular function (not memoized)
  const addTodoList = () => {
    if (inputValue.trim() === "") return;
    setList((prevList) => [...prevList, inputValue]);
    setInputValue("");
    console.log("Hello");
  };

  return (
    <>
      <h1>Item List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add an Item"
      />
      <button onClick={addTodoList}>Add to List</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
