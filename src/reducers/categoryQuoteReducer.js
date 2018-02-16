export const categoryQuoteReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_CATEGORY_QUOTE':
      return action.categoryQuoteToDispatch;
    default:
      return state;
  }
}