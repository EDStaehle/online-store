
export const changeDisplay = (categories) => {
  return {
    type: 'CHANGE',
    payload: categories
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
