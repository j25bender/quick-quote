export const homeQuoteReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_HOME_QUOTE':
      return action.homeQuoteToDispatch;
    default: 
      return state;
  }
}