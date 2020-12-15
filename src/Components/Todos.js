import { render } from '@testing-library/react';
import React,{Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class Todos extends Component {

  complete =() =>
  {
    console.log(this.props.it.id);
  }

  render(){
  
  
    return (
      
    this.props.fisal.map((tache)=>
    (
        <Item key={tache.id} it={tache} markcomplete = {this.props.complete}/>
        
    ))
   
    );
  
  }
}

Todos.propTypes =
{
   fisal : PropTypes.array.isRequired
}

export default Todos;