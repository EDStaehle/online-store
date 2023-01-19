
export const changeDisplay = (categories) => {
  console.log(categories, 'faaaaaaaaaaaaaag')
  return {
    type: 'CHANGE',
    categories
  }
}
export const clear = () => {
  return {
    type: 'CLEAR',
    payload: {},
  }
}
export const addItem = (product) => {
  console.log('this is a test')
  return {
    type: 'ADD',
    payload: product
  }
}
export const showCart = () => {
  return {
    type: 'SHOW',
    payload: {}
  }
}
export const removeItem = (product) => {
  return {
    type: 'REMOVE',
    payload: product
  }
}

