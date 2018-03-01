import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import Card from '../Card/Card';
import { scrollLeft } from '../../helper/helper';
import './Favorites.css';
import PropTypes from 'prop-types';
//icon stays highlighted
export class Favorites extends Component {

  handleFavoriteClick = (quoteData) => {
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
      <div id="div-scroll-from">
        <div className="all-cards">
          { this.renderFavorites() }
        </div>
      </div>
    )
  }
}

Favorites.propTypes = {
  toggleFavorite: PropTypes.func,
  handleClick: PropTypes.func,
  handleFavoriteClick: PropTypes.func,

  favoritess: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  }))
};

export const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (favoriteQuote) => dispatch(toggleFavorite(favoriteQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
