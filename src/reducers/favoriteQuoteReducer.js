export const favoriteQuoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [ ...state, action.favoriteQuote ];
    case 'REMOVE_FAVORITE':
      return [ ...state, action.favToRemove ];
    default:
      return state;
  }
}