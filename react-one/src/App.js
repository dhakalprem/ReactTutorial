import logo from './logo.svg';
import './App.css';

function App() {
  const x=90;
  return (
    <>
    <h1 className="">First React Application</h1>
    <p>{(x)>15? "Greater" : "Smaller" }</p>
    </>
  );
}

export default App;
