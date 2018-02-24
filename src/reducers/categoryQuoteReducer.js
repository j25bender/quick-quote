export const categoryQuoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CATEGORY_QUOTE':
      const newQuote = state.map( quote => console.log('quote.id', quote.id))
      return [ ...state, action.categoryQuote ];
    default:
      return state;
  }
}