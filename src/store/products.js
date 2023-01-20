import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


// 
export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products')

  dispatch(displayProducts(response.data.results));
}
const initialState = []

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    displayProducts: (state, action) => {

      return action.payload
    },
  }
})

export const { displayProducts, } = productSlice.actions
export default productSlice.reducer;