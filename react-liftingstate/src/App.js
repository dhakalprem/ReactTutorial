import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";

function App() {
  //Listing state up or pass data from child to parent
  function getData(data) {
    console.log(data);
  }
  return (
    <>
      <Child getData={getData} />
    </>
  );
}

export default App;
