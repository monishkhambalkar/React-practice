import React, { useContext } from "react";
// Import UserContext
import { UserContext } from "../App";

const UseGrandChild = () => {
  // Access the user context
  const user = useContext(UserContext);

  return (
    <div>
      <h3>This is the Grandchild Component</h3>
      <p>User: {user}</p> {/* Display the user context value */}
    </div>
  );
};

export default UseGrandChild;
