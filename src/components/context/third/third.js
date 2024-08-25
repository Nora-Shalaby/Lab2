import React from "react";
import Fourth from "../fourth/fourth";
import { MyConsumer } from "../context";

function Third() {
  return (
    <>
      <h1>Third</h1>
      <MyConsumer>{(value) => <h2>Hello, {value}</h2>}</MyConsumer>
      <Fourth />
    </>
  );
}

export default Third;
