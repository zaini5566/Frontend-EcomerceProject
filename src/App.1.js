import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatagories from './Pages/ShopCatagories';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Product />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/Catagories' element={<ShopCatagories />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
