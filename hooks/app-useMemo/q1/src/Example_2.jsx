import React, { useState, useMemo } from "react";

const ChildComponent = ({ items }) => {
  console.log("Child Rendered");
  return (
    <>
      <p>Items : {items.join(",")}</p>
    </>
  );
};

const MemoizedChild = React.memo(ChildComponent);

const ExampleTwo = () => {
  const [count, setCount] = useState(0);

  const memoizedItems = useMemo(() => ["Apple", "Banana", "Cherry"], []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <MemoizedChild items={memoizedItems} />
    </div>
  );
};

export default ExampleTwo;
