import { Route, Routes } from "react-router-dom";

import { Stack } from "@mui/material";
import Cart from './Pages/Cart';
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import Product from './Pages/Product';
import Products from './Pages/Products';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Stack sx={{ height: "100%" }}>
    
      <Stack>
        <Header />
      </Stack>
    
      <Stack sx={{ flexGrow: 1 }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/produto/:id' element={<Product />} />
          <Route exact path='/produtos' element={<Products />} />
          <Route exact path='/carrinho' element={<Cart />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
      </Stack>
      
      <Stack>
        <Footer />
      </Stack>

    </Stack>
  );
}

export default App;
