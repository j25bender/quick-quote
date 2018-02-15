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
            <NavLink to='/inspire' className='nav'>Inspiring</NavLink>
            <NavLink to='/management' className='nav'>Management</NavLink>
            <NavLink to='/sports' className='nav'>Sports</NavLink>
            <NavLink to='/life' className='nav'>Life</NavLink>
            <NavLink to='/funny' className='nav'>Funny</NavLink>
            <NavLink to='/love' className='nav'>Love</NavLink>
            <NavLink to='/art' className='nav'>Art</NavLink>
            <NavLink to='/students' className='nav'>Students</NavLink>
          </header>
        </div>
      </div>
    );
  }
})

// Header.propTypes = {

// };

export default Header;