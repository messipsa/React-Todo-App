import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';
import Todos from './Components/Todos';


class App extends Component {
  state = {
    todos : [
      {
         id:1,
         title : 'Tp Sfsd',
         completed:false,
      },
      {
        id:2,
         title : 'Cours Thp',
         completed:false,
      },
      {
        id:3,
        title : 'Learn React',
        completed:true,
      },
    ]
  };


complet = (id) =>{
  console.log(id);
}

  render(){

  
    return (
    <div className="App">
      <Todos fisal={this.state.todos} complete = {this.complet}/>
      <h1>Salim {this.state.todos[0].title}</h1>
    </div>
  );
  }
}

export default App;
