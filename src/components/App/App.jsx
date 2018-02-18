import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Random from '../Random/Random';
import Card from '../Card/Card';
import Home from '../Home/Home';
import Category from '../Category/Category';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class App extends Component {

  render() {
    const pathnameProp = this.props.location;    
    console.log('sddfdfsd',pathnameProp)    
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={ Category } />
          <Route path='/home' component={ Category } />
          <Route path='/random' component={ Category } />
          <Route path='/motivation' component={ Category } />
          <Route path='/positive' component={ Category } />
          <Route path='/life' component={ Category } />
          <Route path='/funny' component={ Category } />
          <Route path='/love' component={ Category } />
          <Route path='/students' component={ Category } />
          <Route path='/inspiration' component={ Category } />
          <Route path='/meditation' component={ Category } />
        </Switch>
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
