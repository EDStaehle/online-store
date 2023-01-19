import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const GET_CATEGORIES = 'GET_CATEGORIES'

export const setCategories = createAction(GET_CATEGORIES)

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  console.log(response)
  dispatch(setCategories(response.data.results));
}

const categoriesReducer = createReducer(
  {
    categories: [],
  },
  {
    [GET_CATEGORIES]: (state, action) => {
      return {
        categories: action.payload
      }
    }
  },
)
export default categoriesReducer;