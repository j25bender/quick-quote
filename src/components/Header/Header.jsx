import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { scrollLeft } from '../../helper/helper'
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-section">
          <header>
          <h1>QUOTE ME</h1>
            <NavLink to='/favorites' className='nav' onClick={() => scrollLeft(this.props.favorites)}>Favorites</NavLink>
            <NavLink to='/motivation' className='nav' onClick={() => scrollLeft(this.props.categoryQuotes)}>Motivation</NavLink>
            <NavLink to='/positive' className='nav' onClick={() => scrollLeft(this.props.categoryQuotes)}>Positive</NavLink>
            <NavLink to='/life' className='nav' onClick={() => scrollLeft(this.props.categoryQuotes)}>Life</NavLink>
            <NavLink to='/funny' className='nav' onClick={() => scrollLeft(this.props.categoryQuotes)}>Funny</NavLink>
            <NavLink to='/love' className='nav' onClick={() => scrollLeft(this.props.categoryQuotes)}>Love</NavLink>
            <NavLink to='/random' className='nav' onClick={() => scrollLeft(this.props.randomQuotes)}>Random</NavLink>
            <NavLink to='/students' className='nav' onClick={() => scrollLeft(this.props.categoryQuotes)}>Students</NavLink>
            <NavLink to='/inspiration' className='nav' onClick={() => scrollLeft(this.props.categoryQuotes)}>Inspiration</NavLink>
            <NavLink to='/meditation' className='nav' onClick={() => scrollLeft(this.props.categoryQuotes)}>Meditation</NavLink>
          </header>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites,
  randomQuotes: state.randomQuotes,
  categoryQuotes: state.categoryQuotes
});

export default connect(mapStateToProps)(Header);