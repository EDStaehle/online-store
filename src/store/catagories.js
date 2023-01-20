import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');

  dispatch(setCategories(response.data.results,));
}
const initialState = []
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return action.payload
    }
  }
})

export const { setCategories } = categorySlice.actions
export default categorySlice.reducer;