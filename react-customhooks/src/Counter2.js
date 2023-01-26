import React from "react";
import useCounter from "./useConter";
function Counter2() {
  const [count, Increment, Decrement] = useCounter();
  return (
    <div>
      <div>{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
export default Counter2;
