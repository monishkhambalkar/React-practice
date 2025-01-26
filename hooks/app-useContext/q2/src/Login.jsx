import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (username.trim()) {
      login(username);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10ppx", fontSize: "16px" }}
      />
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        login
      </button>
    </div>
  );
};

export default Login;
