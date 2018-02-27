import React, { Component } from 'react';
import './Card.css'
import PropTypes from 'prop-types';

//remove if(props) thats always goinng to be true
export class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  renderCards(props) {
    const { quote, author, categories } = props.data;
    const cardHtml = <div>
                       <h4 className="quote">{ quote }</h4>
                       <h5 className="author" defaultValue="~Anonymous">{ author }</h5>
                       <button className="favorite-button" 
                               onClick={ () => props.handleFavoriteClick({ props }) }>
                       </button>
                     </div>
    
    const favoriteCheck = props.data.favorite ? "favorite" : "nonFavorite";
    const categoryList = categories ? categories.map( (category, index) => {
                                                                            return <p key={ index }>{ category }</p>} )               : 
                                                                            <div className="no-category"></div>;
    return (
      <div className="quote-container">
        <div className={ favoriteCheck }>
        { cardHtml }
        <div className="categories">
          { categoryList }
        </div>
        </div>
        <button className="next-button" 
                onClick={ () => props.handleClick(categories) }>
        </button>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderCards() }
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string,
    id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,

  handleClick: PropTypes.func.isRequired,
  handleFavoriteClick: PropTypes.func.isRequired
};

export default Card;