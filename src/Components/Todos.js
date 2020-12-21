import { render } from '@testing-library/react';
import React,{Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class Todos extends Component {

  complete =() =>
  {
    console.log(this.props.it.id);
  }

  delete = ()=>
  {
    console.log(this.props.it.id);
  }

  render(){
  
  
    return (
      
    this.props.fisal.map((tache)=>
    (
        <Item key={tache.id} it={tache} markcomplete = {this.props.complete} delete = {this.props.delete}/>
        
    ))
   
    );
  
  }
}

Todos.propTypes =
{
   fisal : PropTypes.array.isRequired,
   complete : PropTypes.func.isRequired,
   delete :  PropTypes.func.isRequired
}

export default Todos;