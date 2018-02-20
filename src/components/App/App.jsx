import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Category from '../Category/Category';
import { Route, Switch } from 'react-router-dom';

export class App extends Component {
  render() {
    const routes = [ 'home', 'random', 'motivation', 'positive', 'life', 'funny', 'love', 'students', 'inspiration', 'meditation' ]; 
    const renderRoutes = routes.map( (route, i) => <Route key={ i } path={ '/' + route } component={ Category } /> );
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={ Category } />
          { renderRoutes }
        </Switch>
      </div>
    );
  }
}

export default App;