import React, { Component } from 'react';
import './Category.css';
import { connect } from 'react-redux';
import { addCategoryQuote } from '../../actions';
import { fetchQuoteCategories } from '../../api/apiCalls';
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
    const categoryQuoteToDispatch = await fetchQuoteCategories(category);
    this.props.addCategoryQuote(categoryQuoteToDispatch);
  }
  
  render() {
    const { categoryQuote } = this.props;
    const categoryCards = categoryQuote.map( (quoteData) => <Card key={ quoteData.id } 
                                                                  data={ quoteData } 
                                                                  newQuote={ this.handleClick.bind(this) } /> )
    return (
      <div className="quote-container">
        { categoryCards }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  categoryQuote: state.categoryQuote
});

export const mapDispatchToProps = (dispatch) => ({
  addCategoryQuote: (categoryQuoteToDispatch) => dispatch(addCategoryQuote(categoryQuoteToDispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);

// Category.propTypes = {

// };
