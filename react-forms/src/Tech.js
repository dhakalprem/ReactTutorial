import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function Tech() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  function handleChange(e) {
    //console.log(e.target.name);
    if (e.target.name == "fname") {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPswd(e.target.value);
    }
  }
  return (
    <>
      <form className="">
        <label>First name:</label>
        <input type="text" name="fname" value={name} onChange={handleChange} />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={pswd}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
export default App;
