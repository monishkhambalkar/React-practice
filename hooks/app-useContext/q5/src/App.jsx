import { useState } from "react";
import { PermissionProvider } from "./contexts/PermissionsContext";
import AdminDashboard from "./pages/AdminDashboard";
import UserProfile from "./pages/UserProfile";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // https://chatgpt.com/c/6792769c-15f4-8003-bd78-8500f61d484a

  return (
    <>
      <PermissionProvider>
        <div>
          <h1>Role based Permission App</h1>
          <AdminDashboard />
          <UserProfile />
        </div>
      </PermissionProvider>
    </>
  );
}

export default App;
