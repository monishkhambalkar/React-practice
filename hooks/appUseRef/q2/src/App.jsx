import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <div>
        <h2>Current Count : {count}</h2>
        <h3>Previous count : {prevCountRef.current}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}

export default App;
