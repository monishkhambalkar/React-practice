import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;
