import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

export class Header extends Component {

  render() {
    return (
      <div>
        <div className="header-section">
          <h1>QUICK QUOTE</h1>
          <header>
            <NavLink to='/home' className='nav'>Home</NavLink>
            <NavLink to='/motivation' className='nav'>Motivation</NavLink>
            <NavLink to='/positive' className='nav'>Positive</NavLink>
            <NavLink to='/life' className='nav'>Life</NavLink>
            <NavLink to='/funny' className='nav'>Funny</NavLink>
            <NavLink to='/love' className='nav'>Love</NavLink>
            <NavLink to='/random' className='nav'>Random</NavLink>
            <NavLink to='/students' className='nav'>Students</NavLink>
            <NavLink to='/inspiration' className='nav'>Inspiration</NavLink>
            <NavLink to='/meditation' className='nav'>Meditation</NavLink>
          </header>
        </div>
      </div>
    );
  }
}

// Header.propTypes = {

// };

export default Header;