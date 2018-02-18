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

  componentWillReceiveProps(nextProps) {
    if(this.props.location !== nextProps.location) {
      const pathnameProp = nextProps.location.pathname;    
      const cleanCategory = pathnameProp.slice(1);
      this.fetchAndDispatch(cleanCategory);
    }
  }

  handleClick = async (categories) => {
    const randomValue = categories.length !== 1 ? categories[ Math.floor( Math.random() * categories.length ) ] : 'funny';
    const categoryQuoteToDispatch = await fetchQuoteCategories(randomValue);
    this.props.addCategoryQuote(categoryQuoteToDispatch);
  }

  async fetchAndDispatch(category) {
    console.log('carts', category)
    const { homeQuote, randomQuote, categoryQuote } = this.props;
    if( category === 'home' ) {
      const homeQuoteToDispatch = await fetchHomeQuote();
      this.props.addHomeQuote(homeQuoteToDispatch);
      return [ ...homeQuote, homeQuoteToDispatch ];
    } else if ( category === 'random' ) {
      const randomQuoteToDispatch = await fetchRandomQuote();
      this.props.addRandomQuote(randomQuoteToDispatch);
      return [ ...randomQuote, randomQuoteToDispatch ];
    } else {
      const categoryQuoteToDispatch = await fetchQuoteCategories(category);
      this.props.addCategoryQuote(categoryQuoteToDispatch);
      return [ ...categoryQuote, categoryQuoteToDispatch ];
    }
  }

  // async renderCards(stateObject, newQuote) {
  //   const cardType = await stateObject;
  //   // console.log('ct', await cardType)
  //   const combo = [...cardType, newQuote ]
  //   if(combo) {
  //     // console.log('combo', combo)

  //     const dummydata = [{author: "Ralph Waldo Emerson", categories: ["courage", "virtues"], quote: "do the thing!", id: "2eNh2vR9NCONZwEn8PVPIgeF"}]
  //     const cardsToRender = await dummydata.map( (quoteData) => <Card key={ quoteData.id } data={ quoteData } newQuote={ this.handleClick } />
      
  //   )
  //   // console.log('cardstorender', cardsToRender)
    
  //   return await combo
      
  //   }
  // }
  
  render() {
    const { homeQuote, randomQuote, categoryQuote } = this.props;
    const pathnameProp = this.props.location.pathname;

      if(pathnameProp.includes('random')) {
        const randomCards = randomQuote.map( quote => <Card key={ quote.id } data={ quote } handleClick={ this.handleClick } /> )
        console.log(randomCards)
        return <div>{ randomCards }</div>

      } else if (pathnameProp.includes('home')) {
        const homeCards = homeQuote.map( quote => <Card key={ quote.id } data={ quote } handleClick={ this.handleClick } /> )
        console.log(homeCards)
        return <div>{ homeCards }</div>

      } else if (pathnameProp !== 'random' && pathnameProp !== 'home') {
        const categoryCards = categoryQuote.map( quote => <Card key={ quote.id } data={ quote } handleClick={ this.handleClick } /> )
        console.log(categoryCards)
        return <div>{ categoryCards }</div>
      }

      else { return null }
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


