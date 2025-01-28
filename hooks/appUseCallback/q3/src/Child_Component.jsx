import React from "react";

const ChildInput = React.memo(({ label, value, onChange }) => {
  console.log(`${label} render`);
  return (
    <>
      <div>
        <label>
          {label}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </label>
      </div>
    </>
  );
});

export default ChildInput;
