import logo from "./logo.svg";
import "./App.css";
//Rendering of list on react
//How map() work in React
function Example() {
  const city = ["Kathmandu", "Pokhara", "Surkhet", "Butwal"];
  const result = city.map((city, index) => (
    <h1 key={index}>
      {city} Index is {index}
    </h1>
  ));
  return (
    <>
      <div className="App">
        <h1>{result}</h1>
      </div>
    </>
  );
}
export default Example;
