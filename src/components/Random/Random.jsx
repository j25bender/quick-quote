import React, { Component } from 'react';
import './Random.css'
import { connect } from 'react-redux';
import { fetchRandomQuote } from '../../api/apiCalls';
import { addRandomQuote } from '../../actions';
import PropTypes from 'prop-types';

export class Random extends Component {

  async componentDidMount() {    
    const randomQuoteToDispatch = await fetchRandomQuote();
    this.props.addRandomQuote(randomQuoteToDispatch)
  }

  render() {
    const { randomQuote } = this.props;  
    const categories = randomQuote.quote ? randomQuote.categories.map( (cat, i) => <p key={ i }>{ cat }</p>)                                       : null;
    return (
      <div className="random-quote-container">
        <h1 className="random-quote">{ randomQuote.quote }</h1>
        <h2 className="random-quote-author">{ randomQuote.author }</h2>
        <div className="categories">{ categories }</div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  randomQuote: state.randomQuote
});

export const mapDispatchToProps = (dispatch) => ({
  addRandomQuote: (randomQuoteToDispatch) => dispatch(addRandomQuote(randomQuoteToDispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(Random);

Random.propTypes = {
  randomQuote: PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string)
  })
}
