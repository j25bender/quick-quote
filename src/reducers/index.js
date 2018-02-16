import { combineReducers } from 'redux';
import { randomQuoteReducer } from './randomQuoteReducer';
import { homeQuoteReducer } from './homeQuoteReducer';
import { categoryQuoteReducer } from './categoryQuoteReducer';

const rootReducer = combineReducers({
  randomQuote: randomQuoteReducer,
  homeQuote: homeQuoteReducer,
  categoryQuote: categoryQuoteReducer
});

export default rootReducer;