import React, { Component } from 'react';
import './Category.css';
import { addHomeQuote, addRandomQuote, addCategoryQuote } from '../../actions';
import { fetchHomeQuote, fetchRandomQuote, fetchQuote } from '../../api/apiCalls';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Category extends Component {

  componentDidMount() {
    const pathnameProp = this.props.location.pathname;    
    const cleanCategory = pathnameProp.slice(1);
    this.fetchAndDispatch(cleanCategory);
  }

  componentWillReceiveProps(nextProps) {
    // double check this is working as expected
    // test is props.location nextprops match dont match
    console.log('this.props.location.key', this.props, Date.now())
    console.log('nextProps.location.key', nextProps, Date.now())
    console.log('Do this,props.location.key !== nextProps.location.key?', this.props.location.key !== nextProps.location.key)
    if(this.props.location.key !== nextProps.location.key) {
      const pathnameProp = nextProps.location.pathname;
      const cleanCategory = pathnameProp.slice(1);
      this.fetchAndDispatch(cleanCategory);
    }
  }

  handleClick = async (categories) => {
    // test it calls fetch quote cat and add category quote
    const randomCategory = categories.length !== 1 ? categories[ Math.floor( Math.random() * categories.length ) ] : 'funny';
    try {
      const categoryQuoteToDispatch = await fetchQuote(randomCategory);
      this.props.addCategoryQuote(categoryQuoteToDispatch);      
    } catch(error) {
      throw new Error(`handleClick failed to fetch: ${error}`)
    }
  }

  async fetchAndDispatch(category) {
    // test given a category the correct fetch and add action gets called and errors
    const { homeQuote, randomQuote, categoryQuote } = this.props;

    if(category === 'home') {
      try {
        const homeQuoteToDispatch = await fetchHomeQuote();
        this.props.addHomeQuote(homeQuoteToDispatch);
        return [ ...homeQuote, homeQuoteToDispatch ];
      } catch(error) {
        throw new Error(`fetchHomeQuote in fetchAndDispatch failed: ${error}`);
      }

    } else if (category === 'random') {
      try {
        const randomQuoteToDispatch = await fetchRandomQuote();
        this.props.addRandomQuote(randomQuoteToDispatch);
        return [ ...randomQuote, randomQuoteToDispatch ];
      } catch(error) {
        throw new Error(`fetchRandomQuote in fetchAndDispatch failed: ${error}`)
      }
      
    } else {
      try {
        const categoryQuoteToDispatch = await fetchQuote(category);
        this.props.addCategoryQuote(categoryQuoteToDispatch);
        return [ ...categoryQuote, categoryQuoteToDispatch ];
      } catch(error) {
        throw new Error(`fetchQuote in fetchAndDispatch failed: ${error}`)
      }
    }
  }

  renderCards = () => {
    // test w snapshot passing in diff quotes
    const { homeQuote, randomQuote, categoryQuote } = this.props;
    const pathnameProp = this.props.location.pathname;
    let quoteToUse
    if(pathnameProp.includes('random')) {
      quoteToUse = randomQuote
    } else if(pathnameProp.includes('home')) {
      quoteToUse = homeQuote
    } else {
      quoteToUse = categoryQuote
    }
    const cardsToRender = quoteToUse.map( quote => <Card key={ quote.id } data={ quote } handleClick={ this.handleClick } /> )
    return cardsToRender
  }
  
  render() {
    return (
      <div>
        { this.renderCards() }
      </div>
    )
  }
}

Category.propTypes = {
  addHomeQuote: PropTypes.func,
  addRandomQuote: PropTypes.func,
  addCategoryQuote: PropTypes.func,

  homeQuote: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })),

  randomQuote: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })),

  categoryQuote: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })),
};

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