import React from 'react';
import './Card.css'
// import PropTypes from 'prop-types';

const Card = (props) => {
  const { quote, author, categories } = props.data;
  const cardHtml = <div><h4 className="quote">{ quote }</h4><h5 className="author">{ author }</h5></div>
  if(props) {    
    const favoriteCheck = props.data.favorite ? "favorite" : "nonFavorite";
    const categoryList = categories.map( (cat, i) => <p key={ i }>{ cat }</p> )
    return (
      <div>
        <div className="nonFavorite"><div><h4 className="quote">Hello Quote</h4><h5 className="author">Alexander Author</h5></div></div>
        <div className="categories"><p>life</p><p>love</p><p>lost</p></div>
        <button onClick={ () => props.newQuote(categories) }></button>
      </div>
    )
  }
}

      // <div>
      //   <div className={ favoriteCheck }>{ cardHtml }</div>
      //   <div className="categories">{ categoryList }</div>
      //   <button onClick={ () => props.newQuote(categories) }></button>
      // </div>

// Card.propTypes = {

// };
export default Card;