import { combineReducers } from 'redux';
import { homeQuoteReducer } from './homeQuoteReducer';
import { randomQuoteReducer } from './randomQuoteReducer';
import { categoryQuoteReducer } from './categoryQuoteReducer';
import { favoriteQuoteReducer } from './favoriteQuoteReducer';

const rootReducer = combineReducers({
  homeQuotes: homeQuoteReducer,
  randomQuotes: randomQuoteReducer,  
  categoryQuotes: categoryQuoteReducer,
  favorites: favoriteQuoteReducer
});

export default rootReducer;