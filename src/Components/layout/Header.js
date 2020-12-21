import { render } from '@testing-library/react';
import React,{Component} from 'react';
import   { Link, withRouter } from 'react-router-dom';

function Header()
{
    return(
        <header style={headStyle}>
            <h1>TodoList</h1>
            <Link style={LinkStl} to="/">Home</Link> |
            <Link style={LinkStl} to="/*">About</Link>
        </header>
    );
}

const headStyle={
    background:'#333',
    color:'#fff',
    padding:'10px'
  }


  const LinkStl = {
      color : '#fff',
      textDecoration : 'none',
      padding : '8px'
  }

export default Header;