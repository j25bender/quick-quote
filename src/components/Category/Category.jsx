import React, { Component } from 'react';
import './Category.css';
import { connect } from 'react-redux';
import { addCategoryQuote } from '../../actions';
import { fetchQuoteCategories } from '../../api/apiCalls';
// import PropTypes from 'prop-types';

export class Category extends Component {

  async componentDidMount() {
    const pathnameProp = await this.props.location.pathname;
    const cleanCategory = await pathnameProp.slice(1);
    const categoryQuoteToDispatch = await fetchQuoteCategories(cleanCategory);
    this.props.addCategoryQuote(categoryQuoteToDispatch);
  }
  
  render() {
    const { categoryQuote } = this.props;
    const categories = categoryQuote.id ? categoryQuote.categories.map( (cat, i) => <p key={ i }>{ cat }</p>) : null;
    return (
      <div className="category-quote-container">
        <h1 className="category-quote">{ categoryQuote.quote }</h1>
        <h2 className="category-quote-author">{ categoryQuote.author }</h2>
        <div className="categories">{ categories }</div>
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
