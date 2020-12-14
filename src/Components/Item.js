import { render } from '@testing-library/react';
import React,{Component} from 'react';

import PropTypes from 'prop-types';

class Item extends Component {
  render(){

  
    return (
      
   <div style={itemStyle}>
       <h1>{this.props.it.title}</h1>
   </div>
   
    );
  
  }
}


this.PropTypes = {
    it:PropTypes.object.isRequired
}

const itemStyle = {backgroundColor:'#f4f4f4'}

export default Item;