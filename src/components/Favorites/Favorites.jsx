import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import Card from '../Card/Card';
import {handleClick} from '../Category/Category';
import './Favorites.css';

export class Favorites extends Component {
  constructor(props) {
    super(props)

  }
  
  renderFavorites = () => {
    if(!this.props.favorites.length) {
      return <h1 className="emptyFavorites">No Favorites...</h1>
    }
    const { favorites } = this.props
    const favoriteCards = favorites.map( (quote, key) => {
      return <Card key={ quote.id } 
                  data={ quote } 
                  handleClick={ this.handleClick } 
                  handleFavoriteClick={ this.handleFavoriteClick }/>
    })
    return favoriteCards;
  }

  render() {
    // console.log('cat',handleClick())
    return (
      <div className="all-cards">
        {this.renderFavorites()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (favoriteQuote) => dispatch(toggleFavorite(favoriteQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
