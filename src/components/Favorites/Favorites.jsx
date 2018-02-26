import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import Card from '../Card/Card';
import { scrollLeft } from '../../helper/helper';
import { handleClick } from '../Category/Category';
import './Favorites.css';

export class Favorites extends Component {

  handleFavoriteClick = (quoteData) => {
    const { favorite } = quoteData.props.data;
    const favoriteQuote = quoteData.props.data;
    this.props.toggleFavorite(favoriteQuote);
  }

  handleClick = () => {
    scrollLeft(this.props.favorites);
  }
  
  renderFavorites = () => {
    const { favorites } = this.props
    if(!favorites.length) {
      return <h1 className="emptyFavorites">No Favorites...</h1>
    }
    const favoriteCards = favorites.map( (quote, key) => {
      return <Card key={ quote.id } 
                   data={ quote } 
                   handleClick={ this.handleClick } 
                   handleFavoriteClick={ this.handleFavoriteClick }/>
    })
    return favoriteCards;
  }

  render() {
    return (
      <div id="myDiv">
        <div className="all-cards">
          { this.renderFavorites() }
        </div>
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
