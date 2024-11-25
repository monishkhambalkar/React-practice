import React from "react";
import UseGrandChild from "./UseGrandChild";

const UseChild = () => {
  return (
    <div>
      <h2>This is the Child Component</h2>
      <UseGrandChild /> {/* Render the grandchild component here */}
    </div>
  );
};

export default UseChild;
