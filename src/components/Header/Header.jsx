import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { scrollLeft } from '../../helper/helper';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    const { homeQuotes, randomQuotes, categoryQuotes, favorites } = this.props;
    return (
      <div>
        <div className="header-section">
          <header>
          <h1>QUICK QUOTE</h1>
            <NavLink to='/home' onClick={ () => scrollLeft(homeQuotes)} className='nav'>Home</NavLink>
            <NavLink to='/favorites' onClick={ () => scrollLeft(favorites)} className='nav'>Favorites</NavLink>
            <NavLink to='/motivation' onClick={ () => scrollLeft(categoryQuotes)} className='nav'>Motivation</NavLink>
            <NavLink to='/positive' onClick={ () => scrollLeft(categoryQuotes)} className='nav'>Positive</NavLink>
            <NavLink to='/life' onClick={ () => scrollLeft(categoryQuotes)} className='nav'>Life</NavLink>
            <NavLink to='/funny' onClick={ () => scrollLeft(categoryQuotes)} className='nav'>Funny</NavLink>
            <NavLink to='/love' onClick={ () => scrollLeft(categoryQuotes)} className='nav'>Love</NavLink>
            <NavLink to='/random' onClick={ () => scrollLeft(randomQuotes)} className='nav'>Random</NavLink>
            <NavLink to='/students' onClick={ () => scrollLeft(categoryQuotes)} className='nav'>Students</NavLink>
            <NavLink to='/inspiration' onClick={ () => scrollLeft(categoryQuotes)} className='nav'>Inspiration</NavLink>
            <NavLink to='/meditation' onClick={ () => scrollLeft(categoryQuotes)} className='nav'>Meditation</NavLink>
          </header>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  homeQuotes: state.homeQuotes,
  randomQuotes: state.randomQuotes,
  categoryQuotes: state.categoryQuotes,
  favorites: state.favorites
})

export default connect(mapStateToProps, null)(Header)