
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {RrowserRouter as Router,Switch,Route} from 'react'
import Login from './Login';
import REGISTRATION from './REGISTRATION';
import Home from './Components/Home';
import ShowAllMedicines from './medicines/ShowAllMedicines';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
        
     
      <ShowAllMedicines></ShowAllMedicines>
    </div>
  );
  
}

export default App;
