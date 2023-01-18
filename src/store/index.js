import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './catagories.js';
import productReducer from './products.js';
import activeReducer from './activeCat.js';
import cartMiniReducer from './cartMini.js';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  active: activeReducer,
  cartMini: cartMiniReducer
});
export default function store() {
  return createStore(reducers, composeWithDevTools())
}