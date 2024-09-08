import React, { useContext } from "react";
import { mycontext } from "../../../App";

function UseContext() {
  const value = useContext(mycontext);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

export default UseContext;
