import { useState, useRef } from "react";
import "./App.css";

function App() {
  const boxRef = useRef(null); // Reference to the box element
  const posRef = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);

    // Get the initial mouse position and element position
    posRef.current = {
      x: e.clientX,
      y: e.clientY,
      offsetX: boxRef.current.offsetLeft,
      offsetY: boxRef.current.offsetTop,
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - posRef.current.x;
    const dy = e.clientY - posRef.current.y;

    boxRef.current.style.transform = `translate(${
      posRef.current.offsetX + dx
    }px, ${posRef.current.offsetY + dy}px)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={boxRef}
      onMouseDown={handleMouseDown}
      style={{
        width: "100px",
        height: "100px",
        background: "blue",
        position: "absolute",
        cursor: "grab",
        userSelect: "none",
      }}
    />
  );
}

export default App;
