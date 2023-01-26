import logo from "./logo.svg";
import "./App.css";
//Rendering of list on react
//How map() work in React
function Example() {
  const city = ["Kathmandu", "Pokhara", "Surkhet", "Butwal"];
  return (
    <>
      <div className="App">
        {city[0]}
        <br />
        {city[1]}
        <br />
        {city[2]}
        <br />
        {city[3]}
        <br />
      </div>
    </>
  );
}

export default Example;
