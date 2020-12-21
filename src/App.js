import { render } from '@testing-library/react';
import React,{Component} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import {v1 as uuid} from "uuid"; 
import './App.css';
import Header from './Components/layout/Header';
import Todos from './Components/Todos';
import Add from './Components/Add';
import About from './Components/pages/About';
import axios from 'axios';

//import { Router } from 'react-router-dom';

class App extends Component {
  state = {
    todos : []
     /* {
         id:uuid(),
         title : 'Tp Sfsd',
         completed:false,
      },
      {
        id:uuid(),
         title : 'Cours Thp',
         completed:false,
      },
      {
        id:uuid(),
        title : 'Learn React',
        completed:true,
      },*/
   
  };


  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
     .then(response => this.setState({todos : response.data}))
    
  }


complet = (id) =>{
  
 this.setState({todo : this.state.todos.map((tacheee)=>
  {
    console.log(id);
  
    if(id===tacheee.id )
    {
      tacheee.completed = !tacheee.completed; 
     
    }
    return tacheee;
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
    axios.delete(`'https://jsonplaceholder.typicode.com/todos/${id}`);
  this.setState({ todos : [...this.state.todos.filter((taches)=>
     id!==taches.id)]});
  console.log(id);
}


addtodo = (title )=>
{
  /*const tachee = {
    id : uuid(),
    title : title,
    completed : false
  }*/
  axios.post('https://jsonplaceholder.typicode.com/todos',
  {
    title,
    completed : false
  }
  )
   .then(response => this.setState({todos :
     [...this.state.todos , response.data]}));
  
  console.log(title);
}


  render(){

  
    return (
      <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props=>(
        <React.Fragment>
           <Add addtodo = {this.addtodo}/>
      <Todos fisal={this.state.todos} complete = {this.complet} delete={this.delete}/>
      
      <h1>Salim </h1>
        </React.Fragment>
      )
      }/>
      
      <Route path="/*" component={About}/>
      </div>
      
    </div>
    </Router>
  );
  }
}



export default App;
