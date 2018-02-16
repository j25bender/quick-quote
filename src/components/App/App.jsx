import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Card from '../Card/Card';
import Category from '../Category/Category';
import { fetchQuoteOfTheDay, fetchRandomQuote, fetchQuoteCategories } from '../../api/apiCalls';
import { Route, NavLink, Link } from 'react-router-dom';
import { addRandomQuote } from '../../actions';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class App extends Component {

  async componentDidMount() {
    const randomQuoteToDispatch = await fetchRandomQuote();
    this.props.addRandomQuote(randomQuoteToDispatch)
    // console.log('catFish', randomQuoteToDispatch)
  }
  
  render() {
    const { randomQuote } = this.props;
    return (
      <div className="App" >
        <Route path='/' component={ Header } />
        <Route exact path='/main' component={ Main } />
        <Route exact path='/inspire' render={({ match }) => 
          <Category />
        } />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  randomQuote: state.randomQuote
})

export const mapDispatchToProps = (dispatch) => ({
  addRandomQuote: (randomQuoteToDispatch) => dispatch(addRandomQuote(randomQuoteToDispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// App.propTypes = {

// };
