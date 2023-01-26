import logo from "./logo.svg";
import "./App.css";
import React, { useMemo, useState } from "react";
function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      return add * 30;
    },
    [add]
  );

  return (
    <div className="">
      <h1>Learning useMemo</h1>
      {multiplication}
      <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Substraction</button>
      <span>{minus}</span>
    </div>
  );
}

export default App;
