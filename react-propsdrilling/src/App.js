import logo from './logo.svg';
import './App.css';
import ChildA from './ChildA';

function App() {
  const name="Prem Prakash Dhakal"
  return (
   <ChildA name={name}/>
  );
}

export default App;
