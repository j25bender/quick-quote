import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import { logger } from 'redux-logger';

const store = createStore( rootReducer, applyMiddleware(logger) )
console.log('store', store);

const router = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
  
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
