import React, { Component } from 'react';
import './Category.css';
import { connect } from 'react-redux';
import { addCategoryQuote } from '../../actions';
import { fetchQuoteCategories } from '../../api/apiCalls';
import Card from '../Card/Card';
// import PropTypes from 'prop-types';

export class Category extends Component {

  async componentDidMount() {
    const pathnameProp = await this.props.location.pathname;
    const cleanCategory = await pathnameProp.slice(1);
    const categoryQuoteToDispatch = await fetchQuoteCategories(cleanCategory);
    this.props.addCategoryQuote(categoryQuoteToDispatch);
  }

  async handleClick() {
    const { categoryQuote } = this.props;
    const categoryArray = categoryQuote.categories;
    const randomValue = categoryArray.length !== 1 ? categoryArray[ Math.floor( Math.random() * categoryArray.length ) ] : 'funny';
    const categoryQuoteToDispatch = await fetchQuoteCategories(randomValue);
    this.props.addCategoryQuote(categoryQuoteToDispatch);    
  }
  
  render() {
    const { categoryQuote } = this.props;
    const categoryCards = categoryQuote.map( (quote) =>  console.log(quote))
    // <Card key={ quote.id } data={ quote } />
    console.log('cats', categoryQuote)
    return (
      <div className="quote-container">
        'dogs'
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
