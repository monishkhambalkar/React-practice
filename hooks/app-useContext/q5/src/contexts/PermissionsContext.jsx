import React, { createContext, useContext, useState } from "react";

const rolePermissions = {
  admin: ["viewUsers", "editUsers", "deleteUsers", "viewReports"],
  manager: ["viewUsers", "viewReports"],
  user: ["viewUsers"],
};
const PermissionsContext = createContext();
export const PermissionProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState("user");

  const getPermissions = () => rolePermissions[currentRole] || [];

  return (
    <PermissionsContext.Provider
      value={{ currentRole, setCurrentRole, getPermissions }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

export const usePermissions = () => {
  return useContext(PermissionsContext);
};
