import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS'
export const displayProducts = createAction(GET_PRODUCTS)

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
  dispatch(displayProducts(response.data.results));
}

export const categoryChange = (category, products) => {
  return {
    type: 'CATEGORY_CHANGE',
    payload: { category, products }
  }
}

const productReducer = createReducer(
  {
    activeCategory: '',
    categoriesProducts: [],
    products: []
  },
  {
    [GET_PRODUCTS]: (state, action) => {
      return {
        products: action.payload
      }
    },
    'CATEGORY_CHANGE': (state, action) => {
      return {
        ...state,
        activeCategory: action.payload.category,
        categoriesProducts: state.products.filter(product => product.category === action.payload.category),
      }
    },
  }
)
export default productReducer;