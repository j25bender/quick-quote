import { combineReducers } from 'redux';
import { randomQuoteReducer } from './randomQuoteReducer';

const rootReducer = combineReducers({
  randomQuote: randomQuoteReducer
});

export default rootReducer;