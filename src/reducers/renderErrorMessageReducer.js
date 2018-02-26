export const renderErrorMessageReducer = (state = [], action) => {
  switch(action.type) {
    case 'RENDER_ERROR_REDUCER':
      return [ ...state, action.randomQuote ];
    default: 
      return state;
  }
}