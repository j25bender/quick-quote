export const loadingReducer = (state = true, action) => {
  switch (action.type) {
  case 'TOGGLE_LOADING':
    action = !action;
    if (action.loading === true) {
      return [ ...state, action.loading ];
    }
  default:
    return state;
  }
};