import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Favorites from '../Favorites/Favorites';
import { Route, Switch } from 'react-router-dom';

export class App extends Component {

  renderRoutes() {
    const routes = [ '/random', '/motivation', '/positive', '/life', '/funny',
    '/love', '/students', '/inspiration', '/meditation' ]; 
    const renderRoutes = routes.map( (route, index) => <Route key={ index }
                                             path={ route }
                                             component={ Category } /> );
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route path='/' component={ Category } />
          <Route exact path='/favorites' component={ Favorites } />
          { this.renderRoutes() }
        </Switch>
      </div>
    );
  }
}

export default App;