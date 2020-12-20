import { render } from '@testing-library/react';
import React,{Component} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import Header from './Components/layout/Header';
import Todos from './Components/Todos';
import Add from './Components/Add';
import {v5 as uuid} from "uuid";
//import { Router } from 'react-router-dom';

class App extends Component {
  state = {
    todos : [
      {
         id:uuid.v5,
         title : 'Tp Sfsd',
         completed:false,
      },
      {
        id:uuid.v5,
         title : 'Cours Thp',
         completed:false,
      },
      {
        id:uuid.v5,
        title : 'Learn React',
        completed:true,
      },
    ]
  };


complet = (id) =>{
  
 this.setState({todo : this.state.todos.map((tache)=>
  {
    console.log(id);
  
    if(id===tache.id )
    {
      tache.completed = !tache.completed; 
     
    }
    return tache;
  })
});
}

delete = (id) =>
{
  /*console.log(id);
  this.setState({todo : this.state.todos.map((tache)=>
    {
      if(id===tache.id)
      {

      }
      return tache;
    })});*/
  this.setState({ todos : [...this.state.todos.filter(taches=> id!==taches.id)]});
  console.log(id);
}


addtodo = (title )=>
{
  const tachee = {
    id : uuid.v5,
    title : title,
    completed : false
  }
  this.setState({todos : [...this.state.todos , tachee]});
  console.log(title);
}


  render(){

  
    return (
      <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Add addtodo = {this.addtodo}/>
      <Todos fisal={this.state.todos} complete = {this.complet} delete={this.delete}/>
      
      <h1>Salim </h1>
      </div>
      
    </div>
    </Router>
  );
  }
}



export default App;
