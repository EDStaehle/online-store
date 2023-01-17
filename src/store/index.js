import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './catagories.js';

let reducers = combineReducers({
  categories: categoriesReducer
});
export default function store() {
  return createStore(reducers, composeWithDevTools())
}