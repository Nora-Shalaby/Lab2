import React, { useEffect, useState } from "react";

function CounterWithButton() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Done");
  });
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default CounterWithButton;
