import { render } from '@testing-library/react';
import React,{Component} from 'react';

function Header()
{
    return(
        <header style={headStyle}>
            <h1>TodoList</h1>
        </header>
    );
}

const headStyle={
    background:'#333',
    color:'#fff',
    padding:'10px'
  }

export default Header;