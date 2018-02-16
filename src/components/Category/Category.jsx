import React, { Component } from 'react';
import { fetchQuoteCategories } from '../../api/apiCalls';
// import PropTypes from 'prop-types';

export class Category extends Component {

  async componentDidMount() {
    const cats = await fetchQuoteCategories();
    
    console.log('cats', cats)
    
  }
  
  render() {
    return (
      <div>
        CATEGORIES
      </div>
    );
  }
}

// Category.propTypes = {

// };

export default Category;