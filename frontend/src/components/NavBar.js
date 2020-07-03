import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';

class NavBar extends Component {

  renderLinks = () => (
    this.props.crosswords.map(crossword =>(
      <NavLink 
       style={{ marginRight: '10px' }} 
       to={`/${crossword.attributes.title.replace(/\s/g, '')}`}
        >
      {crossword.attributes.title}
      </NavLink>
    ))
  )



 render() {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      > 
        Home
      </NavLink>
      <NavLink 
      style={{ marginRight: '10px' }} 
      to="/index"
      >All Scores</NavLink>
      {this.renderLinks()}
    </div>
  );
  }
}

export default NavBar;
