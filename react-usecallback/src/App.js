import logo from "./logo.svg";
import "./App.css";
import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";
function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {
    //some operation
  }, [count]);
  return (
    <div className="">
      <h1> Learning useCallback</h1>
      <br />
      <ChildA Learning={Learning} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <br />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Addition</button>
    </div>
  );
}

export default App;
