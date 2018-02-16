import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Random from '../Random/Random';
import Card from '../Card/Card';
import Home from '../Home/Home';
import Category from '../Category/Category';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class App extends Component {
  
  render() {
    const { randomQuote } = this.props;
    return (
      <div className="App" >
        <Header />
        <Route path='/' component={ Category } />
        <Route exact path='/' component={ Home } />
        <Route exact path='/home' component={ Home } />
        <Route exact path='/random' component={ Random } />
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
