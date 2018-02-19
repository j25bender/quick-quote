import React, { Component } from 'react';
import './Category.css';
import { addHomeQuote, addRandomQuote, addCategoryQuote } from '../../actions';
import { fetchHomeQuote, fetchRandomQuote, fetchQuoteCategories } from '../../api/apiCalls';
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
  
  render() {
    const { homeQuote, randomQuote, categoryQuote } = this.props;
    const pathnameProp = this.props.location.pathname;

      if(pathnameProp.includes('random')) {
        const randomCards = randomQuote.map( quote => <Card key={ quote.id } data={ quote } handleClick={ this.handleClick } /> )
        return <div>{ randomCards }</div>

      } else if (pathnameProp.includes('home')) {
        const homeCards = homeQuote.map( quote => <Card key={ quote.id } data={ quote } handleClick={ this.handleClick } /> )
        return <div>{ homeCards }</div>

      } else if (pathnameProp !== 'random' && pathnameProp !== 'home') {
        const categoryCards = categoryQuote.map( quote => <Card key={ quote.id } data={ quote } handleClick={ this.handleClick } /> )
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

Category.propTypes = {
  addHomeQuote: PropTypes.func.isRequired,
  addRandomQuote: PropTypes.func.isRequired,
  addCategoryQuote: PropTypes.func.isRequired,

  homeQuote: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,

  randomQuote: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,

  categoryQuote: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,

  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
