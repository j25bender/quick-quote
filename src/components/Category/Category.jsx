import React, { Component } from 'react';
import './Category.css';
import { addHomeQuote, addRandomQuote, addCategoryQuote, toggleFavorite } from '../../actions';
import { fetchHomeQuote, fetchRandomQuote, fetchQuote } from '../../api/apiCalls';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Category extends Component {

  componentDidMount() {
    try {
      const pathnameProp = this.props.location.pathname;    
      const cleanCategory = pathnameProp.slice(1);
      this.fetchAndDispatch(cleanCategory);
    } catch(error) {
      //handle the error 404 fail message from state
    }
  }

  componentWillReceiveProps(nextProps) {
    try {
      if(this.props.location.key !== nextProps.location.key) {
        const pathnameProp = nextProps.location.pathname;
        const cleanCategory = pathnameProp.slice(1);
        this.fetchAndDispatch(cleanCategory);
      } 
    } catch(error) {
      //handle the error 404 fail message from state
    }
  }

  handleClick = async (categories) => {
    // test it calls fetch quote cat and add category quote
    const randomCategory = categories.length >= 2 ? categories[ Math.floor( Math.random() * categories.length ) ] : 'funny';
    try {
      const categoryQuote = await fetchQuote(randomCategory);
      console.log()
      this.props.addCategoryQuote(categoryQuote);      
    } catch(error) {
      //handle the error 404 fail message from state
    }
  }

  handleFavoriteClick = (quoteData) => {
    const { favorite } = quoteData.props.data;
    const favoriteQuote = quoteData.props.data;
    this.props.toggleFavorite(favoriteQuote);
    // favorite === false ? favorite = true : favorite = false;
    // console.log('quoteData', quoteData.props.data)
  }

  async fetchAndDispatch(category) {
    // test given a category the correct fetch and add action gets called and errors
    const { homeQuote, randomQuote, categoryQuote } = this.props;

    if(category === 'home') {
      try {
        const homeQuote = await fetchHomeQuote();
        this.props.addHomeQuote(homeQuote);
        return [ ...homeQuote, homeQuote ];
      } catch(error) {
        //handle the error 404 fail message from state
      }

    } else if (category === 'random') {
      try {
        const randomQuote = await fetchRandomQuote();
        this.props.addRandomQuote(randomQuote);
        return [ ...randomQuote, randomQuote ];
      } catch(error) {
        //handle the error 404 fail message from state
      }
      
    } else {
      try {
        const categoryQuote = await fetchQuote(category);
        this.props.addCategoryQuote(categoryQuote);
        return [ ...categoryQuote, categoryQuote ];
      } catch(error) {
        //handle the error 404 fail message from state
      }
    }
  }

  renderCards = () => {
    // test w snapshot passing in diff quotes
    const { homeQuotes, randomQuotes, categoryQuotes } = this.props;
    const pathnameProp = this.props.location.pathname;
    let quoteToUse
    if(pathnameProp.includes('home')) {
      quoteToUse = homeQuotes
    } else if(pathnameProp.includes('random')) {
      quoteToUse = randomQuotes
    } else {
      quoteToUse = categoryQuotes
    }
    const cardsToRender = quoteToUse.map( quote => {
      return <Card key={ quote.id } 
                   data={ quote } 
                   handleClick={ this.handleClick } 
                   handleFavoriteClick={ this.handleFavoriteClick }/>
    } )
    return cardsToRender
  }
  
  render() {
    return (
      <div className="all-cards">
        { this.renderCards() }
      </div>
    )
  }
}

Category.propTypes = {
  addHomeQuote: PropTypes.func,
  addRandomQuote: PropTypes.func,
  addCategoryQuote: PropTypes.func,
  handleClick: PropTypes.func,
  handleFavoriteClick: PropTypes.func,

  homeQuotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })),

  randomQuotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })),

  categoryQuotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  })),
};

export const mapStateToProps = (state) => ({
  homeQuotes: state.homeQuotes,
  randomQuotes: state.randomQuotes,
  categoryQuotes: state.categoryQuotes,
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  addHomeQuote: (homeQuote) => dispatch(addHomeQuote(homeQuote)),
  addRandomQuote: (randomQuote) => dispatch(addRandomQuote(randomQuote)),
  addCategoryQuote: (categoryQuote) => dispatch(addCategoryQuote(categoryQuote)),
  toggleFavorite: (favoriteQuote) => dispatch(toggleFavorite(favoriteQuote))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);