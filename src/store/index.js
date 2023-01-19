import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './catagories.js';
import productReducer from './products.js';
import activeReducer from './activeCat.js';
import cartReducer from './cartMini.js';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer
});
export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}