import React, { useEffect, useState } from "react";

function IncrementCounterEvrySecond() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>counter: {count}</h1>
    </div>
  );
}

export default IncrementCounterEvrySecond;
