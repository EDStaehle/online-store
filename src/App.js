import CartMini from "./Components/cartMini/cartMini";
import Catagories from "./Components/Catagories";
import Footer from "./Components/Footer";
import Header from './Components/Header'
import Products from "./Components/Products";
const App = () => {
  return (
    <>
      <Header />
      <CartMini />
      <Catagories />
      <Products />
      <Footer />
    </>
  )
}

export default App;
