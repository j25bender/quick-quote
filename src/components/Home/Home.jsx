import React, { Component } from 'react';
import './Home.css'
import { connect } from 'react-redux';
import { fetchHomeQuote } from '../../api/apiCalls';
import { addHomeQuote } from '../../actions';
import PropTypes from 'prop-types';

export class Home extends Component {

  async componentDidMount() {
    // const homeQuoteToDispatch = await fetchHomeQuote();
    // this.props.addHomeQuote(homeQuoteToDispatch)
  }

  render() {
    const { homeQuote } = this.props;  
    const categories = homeQuote.quote ? homeQuote.categories.map( (cat, i) => <p key={ i }>{ cat }</p>)                                       : null;
    return (
      <div className="home-quote-container">
        <h1 className="home-quote">{ homeQuote.quote }</h1>
        <h2 className="home-quote-author">{ homeQuote.author }</h2>
        <div className="categories">{ categories }</div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  homeQuote: state.homeQuote
});

export const mapDispatchToProps = (dispatch) => ({
  addHomeQuote: (homeQuoteToDispatch) => dispatch(addHomeQuote(homeQuoteToDispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// Home.propTypes = {
//   homeQuote: PropTypes.shape({
//     quote: PropTypes.string,
//     author: PropTypes.string,
//     id: PropTypes.string,
//     categories: PropTypes.arrayOf(PropTypes.string)
//   })
// }
