import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  //useState Hook with in Array
  const [items, setItems] = useState([]);
  function addItems() {
    console.log(items);

    //using spread operate[...items]
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random(),
      },
    ]);
  }
  return (
    <>
      <div className="app">
        <ol>
          {items.map((item) => (
            <li key={item.id}>{(item = item.value)}</li>
          ))}
        </ol>
        <button onClick={addItems}>Add Items</button>
      </div>
    </>
  );
}

export default App;
