import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const Header = () => ({
  render() {
    return (
      <div>
        <div className="header-section">
          <h1>QUICK QUOTE</h1>
          <header>
            <NavLink to='/quick-quotes/inspire' className='nav'>Inspiring</NavLink>
            <NavLink to='/quick-quotes/management' className='nav'>Management</NavLink>
            <NavLink to='/quick-quotes/sports' className='nav'>Sports</NavLink>
            <NavLink to='/quick-quotes/life' className='nav'>Life</NavLink>
            <NavLink to='/quick-quotes/funny' className='nav'>Funny</NavLink>
            <NavLink to='/quick-quotes/love' className='nav'>Love</NavLink>
            <NavLink to='/quick-quotes/art' className='nav'>Art</NavLink>
            <NavLink to='/quick-quotes/students' className='nav'>Students</NavLink>
          </header>
        </div>
      </div>
    );
  }
})

// Header.propTypes = {

// };

export default Header;