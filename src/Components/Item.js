import { render } from '@testing-library/react';
import React,{Component} from 'react';

import PropTypes from 'prop-types';

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
  
  render(){

    const{id,title} = this.props.it;
  
    return (
      
   <div style={this.getStyle()}>
     <p>
     <input type="checkbox" onChange={this.props.markcomplete.bind(this,id)}/>
       {title}
       </p>
       
   </div>
   
    );
  
  }
}


Item.propTypes = {
    it:PropTypes.object.isRequired
}

const itemStyle = {backgroundColor:'#f4f4f4'}

export default Item;