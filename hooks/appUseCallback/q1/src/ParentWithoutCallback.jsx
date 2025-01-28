import React, { useState } from "react";

// Child Component
const Child = React.memo(({ onButtonClick }) => {
  console.log("Child rendered");
  return <button onClick={onButtonClick}>Child Button</button>;
});

// Parent Component
function ParentWithoutCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // This function gets re-created on every render
  const handleClick = () => {
    console.log("Button clicked");
    setCount((prevCount) => prevCount + 1);
  };

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

export default ParentWithoutCallback;
