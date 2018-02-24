import { combineReducers } from 'redux';
import { randomQuoteReducer } from './randomQuoteReducer';
import { homeQuoteReducer } from './homeQuoteReducer';
import { categoryQuoteReducer } from './categoryQuoteReducer';
import { favoriteQuoteReducer } from './favoriteQuoteReducer';

const rootReducer = combineReducers({
  randomQuote: randomQuoteReducer,
  homeQuote: homeQuoteReducer,
  categoryQuote: categoryQuoteReducer,
  favorites: favoriteQuoteReducer
});

export default rootReducer;