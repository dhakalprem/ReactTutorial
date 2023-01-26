import React, { useReducer } from "react";

const initialstate = 0;

const recucer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      throw state;
  }
};
function Counter() {
  const [count, dispatch] = useReducer(recucer, initialstate);
  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
      </div>
    </>
  );
}
export default Counter;
