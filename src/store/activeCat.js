const initialState = []
function activeReducer(state = initialState, action) {

  const { type, categories } = action
  console.log(categories)
  switch (type) {
    case 'CHANGE':
      console.log([state, categories])
      return [...state, ...categories]
    default:
      return state;
  }
}

export default activeReducer;