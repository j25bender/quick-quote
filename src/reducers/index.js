import { combineReducers } from 'redux';
import { randomQuoteReducer } from './randomQuoteReducer';
import { categoryQuoteReducer } from './categoryQuoteReducer';
import { favoriteQuoteReducer } from './favoriteQuoteReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  randomQuotes: randomQuoteReducer,  
  categoryQuotes: categoryQuoteReducer,
  favorites: favoriteQuoteReducer,
  loading: loadingReducer
});

export default rootReducer;