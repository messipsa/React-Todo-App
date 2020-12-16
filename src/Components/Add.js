import { render } from '@testing-library/react';
import React,{Component} from 'react';

class Add extends Component{
    render(){
        return(
            <form style={{display:'flex'}}>
                <input 
                type="text" 
                name="title" 
                placeholder="Add Todo"
                style={{flex:'10' ,padding : '7px'}}
                
                />
                
                <input type="submit" value="submit" className="btn" style={{flex:'1'}}/>
            </form>

            
        );
    }
}

export default Add;