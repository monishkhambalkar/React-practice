import { useState } from "react";
import ParentForm from "./Parent_Component";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParentForm />
    </>
  );
}

export default App;
