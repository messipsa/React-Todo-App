import { render } from '@testing-library/react';
import React,{Component} from 'react';
import './App.css';
import Header from './Components/layout/Header';
import Todos from './Components/Todos';
import Add from './Components/Add';


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
 this.setState({todo : this.state.todos.map((tache)=>
  {
    if(id===tache.id)
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
  this.setState({ todos : [...this.state.todos.filter(tache=> id!==tache.id)]});
  console.log(id);
}



  render(){

  
    return (
    <div className="App">
      <div className="container">
      <Header />
      <Add />
      <Todos fisal={this.state.todos} complete = {this.complet} delete={this.delete}/>
      
      <h1>Salim </h1>
      </div>
      
    </div>
  );
  }
}



export default App;
