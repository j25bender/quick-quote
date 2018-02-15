import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Card from '../Card/Card';
import Category from '../Category/Category';
import { fetchRandomQuote, fetchQuoteCategories } from '../../api/apiCalls';
import { Route, NavLink, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class App extends Component {

  componentDidMount() {
    const categoryFetch = fetchQuoteCategories();
    
    console.log('catFish', categoryFetch)
  }
  
  render() {
    return (
      <div className="App" >
        <Header />
        <Route path='/quick-quotes/inspire' component={ Category } />
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;