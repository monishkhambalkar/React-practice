import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      // Prevent multiple timers
      timerRef.current = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(10);
  };

  return (
    <>
      <div>
        <h2>Countdown : {count}</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}

export default App;
