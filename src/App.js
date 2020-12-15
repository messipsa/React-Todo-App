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
      <Todos fisal={this.state.todos} complete = {this.complet} delete={this.delete}/>
      <h1>Salim {this.state.todos[0].title}</h1>
    </div>
  );
  }
}

export default App;
