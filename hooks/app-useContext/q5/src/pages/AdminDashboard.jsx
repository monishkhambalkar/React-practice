import React from "react";
import PermissionGuard from "../components/PermissionGuard";
const AdminDashboard = () => {
  return (
    <>
      <PermissionGuard requiredPermission="viewReports">
        <div>
          <h2>Admin Dashboard</h2>
          <p>
            This section is only visible to users with the "viewReports"
            permission.
          </p>
        </div>
      </PermissionGuard>
    </>
  );
};

export default AdminDashboard;
