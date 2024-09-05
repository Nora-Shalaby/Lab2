import React from "react";
import Second from "../second/second";
import { MyProvider } from "../context";

function First() {
  return (
    <>
      <h1>First</h1>
      <MyProvider value="nourhan">
        <Second />
      </MyProvider>
    </>
  );
}

export default First;
