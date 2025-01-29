import React, { useState, useMemo } from "react";

const SquareCalculator = () => {
  const [number, setNumber] = useState(0);

  const squaredValue = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <>
      <div>
        <h2>Square calculator</h2>
        <input
          type="number"
          name=""
          id=""
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <p>Square : {squaredValue}</p>
      </div>
    </>
  );
};

export default SquareCalculator;
