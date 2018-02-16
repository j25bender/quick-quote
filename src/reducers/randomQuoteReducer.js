export const randomQuoteReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_RANDOM_QUOTE':
      return action.randomQuoteToDispatch;
    default: 
      return state;
  }
}