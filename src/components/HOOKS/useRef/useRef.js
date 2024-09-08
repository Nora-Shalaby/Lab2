import React, { useEffect, useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <label>name</label>
      <input type="text" ref={inputRef}></input>
      <label>email</label>
      <input type="text"></input>
    </div>
  );
}

export default UseRef;
