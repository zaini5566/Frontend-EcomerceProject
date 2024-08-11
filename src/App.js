import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatagories from './Pages/ShopCatagories';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrders from './Pages/MyOrders/MyOrders';
import Privacy from './Pages/Privacy';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/Men' element={<ShopCatagories banner={men_banner} category="men"/>}></Route>
      <Route path='/Women' element={<ShopCatagories banner={women_banner} category="women"/>}></Route>
       <Route path='/Kids' element={<ShopCatagories banner={kid_banner} category="kid"/>}></Route>
      <Route path="/product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order' element={<PlaceOrder/>} />
      <Route path='/login' element={ <Login/>}></Route>
      <Route path='/my-orders' element={ <MyOrders/>}></Route>
      <Route path='/Privacy' element={<Privacy/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
