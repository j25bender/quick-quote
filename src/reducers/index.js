import { combineReducers } from 'redux';
import { randomQuoteReducer } from './randomQuoteReducer';
import { homeQuoteReducer } from './homeQuoteReducer';

const rootReducer = combineReducers({
  randomQuote: randomQuoteReducer,
  homeQuote: homeQuoteReducer
});

export default rootReducer;