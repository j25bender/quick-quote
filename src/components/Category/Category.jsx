import React, { Component } from 'react';
import './Category.css';
import { connect } from 'react-redux';
import { addHomeQuote, addRandomQuote, addCategoryQuote } from '../../actions';
import { fetchHomeQuote, fetchRandomQuote, fetchQuoteCategories } from '../../api/apiCalls';
import Card from '../Card/Card';
// import PropTypes from 'prop-types';

export class Category extends Component {

  componentDidMount() {
    const pathnameProp = this.props.location.pathname;    
    const cleanCategory = pathnameProp.slice(1);
    this.fetchAndDispatch(cleanCategory);
  }

  handleClick(categories) {
    const randomValue = categories.length !== 1 ? categories[ Math.floor( Math.random() * categories.length ) ] : 'funny';
    this.fetchAndDispatch(randomValue);
  }

  async fetchAndDispatch(category) {
    const { homeQuote, randomQuote, categoryQuote } = this.props;
    // if( category === 'home' ) {
    //   const homeQuoteToDispatch = await fetchHomeQuote();
    //   this.props.addHomeQuote(homeQuoteToDispatch);
    //   this.renderCards(homeQuote, homeQuoteToDispatch);
    // } else if ( category === 'random' ) {
    //   const randomQuoteToDispatch = await fetchRandomQuote();
    //   this.props.addRandomQuote(randomQuoteToDispatch);
    //   this.renderCards(randomQuote, randomQuoteToDispatch);
    // } else {
    //   const categoryQuoteToDispatch = await fetchQuoteCategories(category);
    //   this.props.addCategoryQuote(categoryQuoteToDispatch);
    //   this.renderCards(categoryQuote, categoryQuoteToDispatch);
    // }
  }

  async renderCards(stateObject, newQuote) {
    const cardType = await stateObject;
    const combo = [...cardType, newQuote ]
   
    if(combo) {
      console.log('combo', combo)
      const cardsToRender = combo.map( (quoteData) => <Card key={ quoteData.id } 
      data={ quoteData } 
      newQuote={ this.handleClick.bind(this) } /> )
      return cardsToRender
    }
  }
  
  render() {
    return (
      <div className="quote-container">
        { this.cardsToRender }
        {/* <div>
          <div className="nonFavorite"><div><h4 className="quote">Hello Quote</h4><h5 className="author">Alexander Author</h5></div></div>
          <div className="categories"><p>life</p><p>love</p><p>lost</p></div>
          <button>More </button>
        </div>
        <div>
          <div className="nonFavorite"><div><h4 className="quote">Hello Quote</h4><h5 className="author">Alexander Author</h5></div></div>
          <div className="categories"><p>life</p><p>love</p><p>lost</p></div>
          <button>More </button>
        </div> */}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  homeQuote: state.homeQuote,
  randomQuote: state.randomQuote,
  categoryQuote: state.categoryQuote
});

export const mapDispatchToProps = (dispatch) => ({
  addHomeQuote: (homeQuoteToDispatch) => dispatch(addHomeQuote(homeQuoteToDispatch)),
  addRandomQuote: (randomQuoteToDispatch) => dispatch(addRandomQuote(randomQuoteToDispatch)),
  addCategoryQuote: (categoryQuoteToDispatch) => dispatch(addCategoryQuote(categoryQuoteToDispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);

// Category.propTypes = {

// };
