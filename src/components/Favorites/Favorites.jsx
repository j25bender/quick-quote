import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite, removeFavorite } from '../../actions';
import Card from '../Card/Card';
import './Favorites.css';

export default class Favorites extends Component {
  
  render() {
    return (
      <div>
        FAVORITES!
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  favorites: state.favorites
}

const mapDispatchToProps = (dispatch) => {
  removeFavorite: (favoriteQuote) => dispatch(removeFavorite(favoriteQuote))
}

connect(mapStateToProps, mapDispatchToProps)(Favorites)
