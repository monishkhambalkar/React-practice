import React, { useState, useCallback } from "react";

// Child Component
const Child = React.memo(({ onButtonClick }) => {
  console.log("Child rendered");
  return <button onClick={onButtonClick}>Child Button</button>;
});

// Parent Component
function ParentWithCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoize the click handler to prevent re-creation
  const handleClick = useCallback(() => {
    console.log("Button clicked");
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array, function is stable

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onButtonClick={handleClick} />

      {/* Simulating frequent re-renders */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default ParentWithCallback;
