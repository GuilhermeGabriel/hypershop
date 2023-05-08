import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Products from './Pages/Products';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <> 
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/produto/:id' element={<Product />} />
        <Route exact path='/produtos' element={<Products />} />
        <Route exact path='/carrinho' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
