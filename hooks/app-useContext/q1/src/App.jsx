import React, { useContext } from "react";
import "./App.css";
import { ReactDOM } from "react-dom";
import ThemeContext from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  console.log(theme.background);

  const appStyle = {
    backgroundColor: theme.background,
    color: theme?.color,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <>
      <div style={appStyle}>
        <h1>Theme Toggle App</h1>
        <ThemeToggler />
      </div>
    </>
  );
}

export default App;
