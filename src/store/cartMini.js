let initialState = {
  inCart: [],
  show: false
};
function cartMiniReducer(state = initialState, action) {

  const { type, payload } = action
  switch (type) {
    case 'ADD':
      // if (state.inCart.includes(payload)) return { ...state }
      state.inCart.push(payload)
      return { ...state }
    case 'SHOW':
      state.show = true;
    default:
      return state;
  }
}
export default cartMiniReducer