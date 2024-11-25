import "./App.css";
import React, { createContext } from "react";
import UseChild from "./UserContext/UseChild";

// Export the UserContext so all components can use it
export const UserContext = createContext();

export default function App() {
  const user = "John Doe";
  return (
    <UserContext.Provider value={user}>
      <UseChild />
    </UserContext.Provider>
  );
}
