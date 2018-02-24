export const homeQuoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOME_QUOTE':
      return [ ...state, action.homeQuote ];
    default: 
      return state;
  }
}