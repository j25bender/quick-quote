export const favoriteQuoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'TOGGLE_FAVORITE':
      action.favoriteQuote.favorite = !action.favoriteQuote.favorite
      if(action.favoriteQuote.favorite === true) {
        return [ ...state, action.favoriteQuote ]
      } else {
        const newState = state.filter( quote => quote !== action.favoriteQuote );
        return [ ...newState ]
      }
    default:
      return state;
  }
}