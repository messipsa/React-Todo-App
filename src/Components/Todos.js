import { render } from '@testing-library/react';
import React,{Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class Todos extends Component {
  render(){

  
    return (
      
    this.props.fisal.map((tache)=>
    (
        <Item key={tache.id} it={tache}/>
    ))
   
    );
  
  }
}

this.PropTypes =
{
   fisal : PropTypes.array.isRequired
}

export default Todos;