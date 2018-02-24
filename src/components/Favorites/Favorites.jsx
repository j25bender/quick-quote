import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions';
import Card from '../Card/Card';
import './Favorites.css';

export default class Favorites extends Component {
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  favorites: state.favorites
}

const mapDispatchToProps = (dispatch) => {
  removeFavorite: (favToRemove) => dispatch(removeFavorite(favToRemove))
}

connect(mapStateToProps, mapDispatchToProps)(Favorites)
