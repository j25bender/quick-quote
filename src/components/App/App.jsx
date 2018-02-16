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
    return (
      <div className="App" >
        <Header />
        <Route exact path='/' component={ Home } />
        <Route exact path='/home' component={ Home } />
        <Route exact path='/random' component={ Random } />
        <Route exact path='/motivation' component={ Category } />
        <Route exact path='/positive' component={ Category } />
        <Route exact path='/life' component={ Category } />
        <Route exact path='/funny' component={ Category } />
        <Route exact path='/love' component={ Category } />
        <Route exact path='/students' component={ Category } />
        <Route exact path='/inspiration' component={ Category } />
        <Route exact path='/meditation' component={ Category } />
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
