import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';

//make this a class and move logic out of render
//remove if(props) thats always goinng to be true
const Card = (props) => {
  const { quote, author, categories } = props.data;
  const cardHtml = <div>
                     <h4 className="quote">{ quote }</h4>
                     <h5 className="author" defaultValue="~Anonymous">{ author }</h5>
                     <button className="favorite-button" 
                             onClick={ () => props.handleFavoriteClick({ props }) }>
                     </button>
                   </div>
  if(props) {
    const favoriteCheck = props.data.favorite ? "favorite" : "nonFavorite";
    const categoryList = categories ? categories.map( (category, index) => {
                                                                            return <p key={ index }>{ category }</p>} )               : 
                                                                            <div className="no-category"></div>;
    return (
      <div>
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
      </div>
    )
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