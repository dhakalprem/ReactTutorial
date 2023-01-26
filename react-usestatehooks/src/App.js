import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

//useState hooks with object
function App() {
  const [allValues, setValues] = useState({
    firstName: "Prem Prakash Dhakal",
    Address: "Kathmandu Nepal",
  });
  function update() {
    //...allValues copy of value firtname and show output
    setValues({ ...allValues, firstName: "Pranesh", Address: "Butwal" });
  }
  return (
    <>
      <div className="App"></div>
      <h1>
        Full Details is {allValues.firstName} and Address is {allValues.Address}
      </h1>
      <button onClick={update}>Update</button>
    </>
  );
}

export default App;
