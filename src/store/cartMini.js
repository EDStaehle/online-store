import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addItem = createAction(ADD_TO_CART);
export const removeItem = createAction(REMOVE_FROM_CART)

export const addToCart = (product) => async (dispatch, getState) => {
  let updatedCart = { ...product }

  if (updatedCart.inStock > 0) {
    updatedCart.inStock = updatedCart.inStock - 1
    let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${updatedCart._id}`, updatedCart);
    dispatch(addItem(response.data))

  }
}
export const removeItemFromCart = (product) => async (dispatch, getState) => {
  let updatedCart = { ...product };
  updatedCart.inStock = updatedCart.inStock + 1
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${updatedCart._id}`, updatedCart);
  dispatch(removeItem(response.data))
}
const cartReducer = createReducer(
  {
    cart: [],
  },
  {
    [ADD_TO_CART]: (state, action) => {
      const inCart = state.cart.find(item => item._id === action.payload._id);
      if (inCart) {
        return state
      } else {
        return {
          cart: [...state.cart, action.payload]
        }
      }
    },
    [REMOVE_FROM_CART]: (state, action) => {
      return {
        cart: state.cart.filter(product => product._id !== action.payload._id)
      }
    }
  }
)
export default cartReducer