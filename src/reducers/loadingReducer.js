export const loadingReducer = (state = { status: true }, action) => {
  switch (action.type) {
  case 'TOGGLE_LOADING':
    if (action.status === false) {
      return { status: action.status };
    }
  default:
    return state;
  }
};