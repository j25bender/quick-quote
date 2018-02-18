export const randomQuoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RANDOM_QUOTE':
      return [ ...state, action.randomQuoteToDispatch ];
    default: 
      return state;
  }
}