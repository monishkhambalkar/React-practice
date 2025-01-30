import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <input type="text" ref={inputRef} placeholder="type something" />
      </div>
    </>
  );
}

export default App;
