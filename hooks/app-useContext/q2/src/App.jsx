import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import Login from "./Login";
import UserDashboard from "./UserDashboard";
import ReactDom from "react-dom";
import "./App.css";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>User Authenticate System</h1>
        {user ? <UserDashboard /> : <Login />}
      </div>
    </>
  );
}

export default App;
