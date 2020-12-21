import { render } from '@testing-library/react';
import React,{Component} from 'react';
import Proptypes from 'prop-types';

class Add extends Component{

    state = {
       title :''
    };


    changement = (event)=>
    {
        this.setState({title : event.target.value});
    }


    Onsubmit = (event)=>{
        event.preventDefault();
        this.props.addtodo(this.state.title);
         this.setState({title : ''});

    }

    render(){
        return(
            <form onSubmit={this.Onsubmit} style={{display:'flex'}}>
                <input 
                type="text" 
                name="title" 
                placeholder="Add Todo"
                style={{flex:'10' ,padding : '7px'}}
                value ={this.state.title}
                onChange={this.changement}

                />
                
                <input type="submit" value="submit" className="btn" style={{flex:'1'}}/>
            </form>

            
        );
    }
}

Add.Proptypes = {
    addtodo :  PropTypes.func.isRequired
}

export default Add;