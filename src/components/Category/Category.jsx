import React, { Component } from 'react';
import './Category.css';
import { addHomeQuote, addRandomQuote, addCategoryQuote, toggleFavorite, toggleLoading } from '../../actions';
import { fetchHomeQuote, fetchRandomQuote, fetchQuote } from '../../api/apiCalls';
import Card from '../Card/Card';
import { scrollLeft } from '../../helper/helper'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//break out categories into diffrent state tree objects
//backgrounds same for each category
//this.props.history.push('./404) build out error component
//addCategoryQuote pass in category as well could add different action for each case 'ADD_LIFE_QUOTE"
//add loading screen
export class Category extends Component {
  constructor() {
    super()

    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    try {
      const pathnameProp = this.props.location.pathname;    
      const cleanCategory = pathnameProp.slice(1);
      await this.fetchAndDispatch(cleanCategory);
      this.props.toggleLoading(false);
      this.setState({
        loading: false
      });
    } catch(error) {
      alert(`Apologises, there was an error: ${error.message}.`);
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
      alert(`Apologises, there was an error: ${error.message}.`);
    }
  }

  handleClick = async (categories) => {
    const { homeQuotes, randomQuotes, categoryQuotes } = this.props;
    const defaultCategories = ['funny', 'life', 'love', 'students', 'positive', 'motivation'];
    const cardCategories = categories[ Math.floor( Math.random() * categories.length ) ];
    const randomCategory = categories.length >= 2 ? cardCategories : defaultCategories[ Math.floor( Math.random() * defaultCategories.length ) ];

    try {
      const newQuote = await fetchQuote(randomCategory);
      const pathnameProp = this.props.location.pathname;
      if(pathnameProp.includes('home')) {
        scrollLeft(homeQuotes);
        this.props.addHomeQuote(newQuote);
      } else if (pathnameProp.includes('random')) {
        scrollLeft(randomQuotes);
        this.props.addRandomQuote(newQuote);
      } else {
        scrollLeft(categoryQuotes);
        this.props.addCategoryQuote(newQuote);
      }      
    } catch(error) {
      alert(`Apologises, there was an error: ${error.message}.`);
    }
  }

  handleFavoriteClick = (quoteData) => {
    const favoriteQuote = quoteData.props.data;
    this.props.toggleFavorite(favoriteQuote);
  }

  async fetchAndDispatch(category) {
    const { homeQuotes, randomQuotes, categoryQuotes } = this.props;

    try {
      if(category === 'home') {
        const homeQuote = await fetchHomeQuote();
        this.props.addHomeQuote(homeQuote);
        return [ ...homeQuotes, homeQuote ];

      } else if (category === 'random') {
        const randomQuote = await fetchRandomQuote();
        this.props.addRandomQuote(randomQuote);
        return [ ...randomQuotes, randomQuote ];
        
      } else {
        const categoryQuote = await fetchQuote(category);
        this.props.addCategoryQuote(categoryQuote);
        return [ ...categoryQuotes, categoryQuote ];
      }
    } catch(error) {
      alert(`Apologises, there was an error: ${error.message}.`);
    }
  }

  renderCards = () => {
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
    if(!this.props.loading.status){
      console.log('not loading jorge')
      const cardsToRender = quoteToUse.map( quote => {
      return <Card key={ quote.id }
                   data={ quote } 
                   handleClick={ this.handleClick } 
                   handleFavoriteClick={ this.handleFavoriteClick }/>
    } )
    return cardsToRender
    }
  }

  loading() {
    if(this.props.loading.status) {
      return <div className="loading">HELLO!</div>
    }
  }
  
  render() {
    return (
      <div id="div-scroll-from">
        <div className="all-cards">
          { this.loading() }
          { this.renderCards() }
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  addHomeQuote: PropTypes.func,
  addRandomQuote: PropTypes.func,
  addCategoryQuote: PropTypes.func,
  toggleFavorite: PropTypes.func,
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
  loading: state.loading
});

export const mapDispatchToProps = (dispatch) => ({
  addHomeQuote: (homeQuote) => dispatch(addHomeQuote(homeQuote)),
  addRandomQuote: (randomQuote) => dispatch(addRandomQuote(randomQuote)),
  addCategoryQuote: (categoryQuote) => dispatch(addCategoryQuote(categoryQuote)),
  toggleFavorite: (favoriteQuote) => dispatch(toggleFavorite(favoriteQuote)),
  toggleLoading: (status) => dispatch(toggleLoading(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);