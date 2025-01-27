const PermissionGuard = ({ requiredPermission, children }) => {
  const { getPermissions } = usePermissions();

  const hasPermission = getPermissions().includes(requiredPermission);

  return;
  hasPermission ? children : <p>Access denied</p>;
};

export default PermissionGuard;
