import React from "react";
import { useReducer } from "react";
const initialState = {
  first: 0,
  second: 10,
};
const reducer = (currState, action) => {
  switch (action.type) {
    case "increment":
      return { ...currState, first: currState.first + action.payload };
    case "decrement":
      return { ...currState, first: currState.first - action.payload };
    case "increment10":
      return { ...currState, second: currState.second + action.payload };
    case "decrement10":
      return { ...currState, second: currState.second - action.payload };
    default:
      return { ...currState };
  }
};
function UseReducer() {
  const [newState, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +1
      </button>
      {newState.first}
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -1
      </button>
      <br />

      <button onClick={() => dispatch({ type: "increment10", payload: 10 })}>
        +10
      </button>
      {newState.second}
      <button onClick={() => dispatch({ type: "decrement10", payload: 10 })}>
        -10
      </button>
    </div>
  );
}

export default UseReducer;
