import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useState } from "react";
function App() {
  const refObject = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(refObject.current.value.toUpperCase());
  }
  return (
    <>
      <form className="App" onSubmit={handleSubmit}>
        <label>First name:</label>
        <input type="text" ref={refObject} />
        <button>Submit</button>
      </form>
    </>
  );
}
export default App;
