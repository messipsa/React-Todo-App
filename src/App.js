import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';
import Todos from './Components/Todos';


class App extends Component {
  render(){

  
    return (
    <div className="App">
      <Todos/>
      <h1>Salim</h1>
    </div>
  );
  }
}

export default App;
