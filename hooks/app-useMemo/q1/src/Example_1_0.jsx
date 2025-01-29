import React, { useState } from "react";

const ExpensiveComponent = ({ number }) => {
  const expensiveCalculation = (num) => {
    console.log(num, "Calculating...");
    for (let o = 0; o < 10000000000000000000000; o++) {
      return num * 2;
    }
  };

  const computedValue = expensiveCalculation(number); // No memoization

  return <p>Computed Value : {computedValue}</p>;
};

const ExampleOneWithoutUseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  return (
    <>
      <div>
        <h1>Without useMemo Example</h1>
        <button onClick={() => setCount(count + 1)}>
          Increment Count : {count}
        </button>
        <button onClick={() => setNumber(number + 1)}>
          Change Number : {number}
        </button>
        <ExpensiveComponent number={number} />
      </div>
    </>
  );
};

export default ExampleOneWithoutUseMemo;
