import { useState } from "react";
function useCounter(InitialValue = 0) {
  const [count, setCount] = useState(InitialValue);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }
  return [count, Increment, Decrement];
}

export default useCounter;
