import logo from "./logo.svg";
import "./App.css";
import React, { createContext } from "react";
import ChildA from "./ChildA";
//What is useContext?
//Create, provider, Consumer
//How to use it?
const data = createContext();
const data1 = createContext();
function App() {
  const name = "Prem Prakash Dhakal";
  const address = "Kathmandu Nepal";
  return (
    <data.Provider value={name}>
      <data1.Provider value={address}>
        <ChildA />
      </data1.Provider>
    </data.Provider>
  );
}

export default App;
export { data, data1 };
