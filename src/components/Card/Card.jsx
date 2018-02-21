import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';

const Card = (props) => {
  const { quote, author = "~ Anonymous", categories } = props.data;
  const cardHtml = <div><h4 className="quote">{ quote }</h4><h5 className="author">{ author }</h5></div>
  if(props) {
    const favoriteCheck = props.data.favorite ? "favorite" : "nonFavorite";
    const categoryList = categories.map( (cat, i) => <p key={ i }>{ cat }</p> )
    return (
      <div>
        <div>
          <div className={ favoriteCheck }>{ cardHtml }</div>
          <div className="categories">{ categoryList }</div>
          <button onClick={ () => props.handleClick(categories) }></button>
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

  handleClick: PropTypes.func.isRequired
};

export default Card;