const initialState = {
  activeCategory: ''
};
function activeReducer(state = initialState, action) {

  const { type, payload } = action
  switch (type) {
    case 'CHANGE':
      return {
        ...state,
        activeCategory: payload,

      }
    default:
      return state;
  }
}

export default activeReducer;