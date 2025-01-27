import React from "react";
import { usePermissions } from "../contexts/PermissionsContext";
const UserProfile = () => {
  const { currentRole, setCurrentRole } = usePermissions;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Current Role : {currentRole}</p>
      <button onClick={() => setCurrentRole("admin")}>Switch to Admin</button>
      <button onClick={() => setCurrentRole("manager")}>
        Switch to Manager
      </button>
      <button onClick={() => setCurrentRole("user")}>Switch to User</button>
    </div>
  );
};

export default UserProfile;
