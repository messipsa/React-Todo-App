import { render } from '@testing-library/react';
import React,{Component} from 'react';

import PropTypes from 'prop-types';
import '../App.css';

class Item extends Component {
  getStyle=()=>
  {
    if(this.props.it.completed)
    {
      return{
        padding : '10px',
        backgroundColor : '#f4f4f4',
        textDecoration : 'line-through'
      }
    }
    else
    {
      return{
        textDecoration : 'none'
      }
    }

  } 
  
  
  Completer = (event) => {
    console.log(this.props);
  }

  delete = () =>
  {
    console.log(this.props);
  }
  
  render(){

    const{id,title} = this.props.it;
  
    return (
      
   <div className='Todo' style={this.getStyle()}>
     <p>
     <input type="checkbox" onChange={this.props.markcomplete.bind(this,id)}/>
       {title}
       <button onClick={this.props.delete.bind(this,id)} style={btnStyle}>x</button>
       </p>
       
   </div>
   
    );
  
  }
}


Item.propTypes = {
    it:PropTypes.object.isRequired
}

const itemStyle = {backgroundColor:'#f4f4f4'}

const btnStyle = {
  background : '#ff0000',
  color : '#fff',
  padding : '5px 8px',
  marginLeft : '15px',
  border : 'none',
  borderRadius : '40%',
  cursor : 'pointer',
  float : 'center'
}

export default Item;