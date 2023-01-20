import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './catagories.js';
import productReducer from './products.js';
import cartReducer from './cartMini.js';
import activeReducer from './activeCat'

const store = () => configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
    activeCat: activeReducer,
    cart: cartReducer
  }
});
export default store() 