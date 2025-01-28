import React, { useState, useCallback } from "react";
import ParentWithoutCallback from "./ParentWithoutCallback";
import ParentWithCallback from "./ParentWithCallback";
import "./App.css";

function App() {
  return (
    <div>
      <ParentWithoutCallback />
      <ParentWithCallback />
    </div>
  );
}

export default App;
