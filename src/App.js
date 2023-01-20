import CartMini from "./Components/cartMini/cartMini";
import Catagories from "./Components/Catagories";
import Footer from "./Components/Footer";
import Header from './Components/Header'
import Products from "./Components/Products";
import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Checkout from "./Components/ShoppingCart";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={
          <>
            <Header />
            <CartMini />
            <Catagories />
            <Products />
            <Footer />
          </>
        } />
        <Route path={'/cart'} element={
          <>
            <Header />
            <Checkout />
          </>

        } />

      </Routes>
      {/* <Header />
      <CartMini />
      <Catagories />
      <Products />
      <Footer />
      <Checkout /> */}
    </>
  )
}

export default App;
