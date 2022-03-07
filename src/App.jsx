import logo from './logo.svg';
import './App.css';
import { Books, Counter } from './Components/Books';
import { Pen } from './Components/Pen';
import { Notebooks } from './Components/Notebooks';
import { Inkpens } from './Components/InkPens';
import {Total} from './Components/Total'
function App() {
  return (
    <div className="App">
    <Pen/>
    <Books/>
    <Notebooks/>
    <Inkpens/>
    
   

    </div>
  );
}

export default App;
