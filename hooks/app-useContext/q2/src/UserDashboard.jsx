import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <p>This is your personalize dashboard</p>
      <button
        onClick={logout}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
