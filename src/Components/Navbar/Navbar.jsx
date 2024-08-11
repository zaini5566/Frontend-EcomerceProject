import React, { useContext, useRef, useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import usericon from "../Assets/Usericon .png";
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Contaxt/ShopContext';
import dropdown from '../Assets/Toggle_img.png';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
const dropdownRef = useRef(null);
const handleClickOutside = (event) => {
  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setShowDropdown(false);
  }
};

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  const [menu, setMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth-token') !== null);
  const { gettotalcartitems } = useContext(ShopContext); 
  const menuRef = useRef();
  const navigate = useNavigate();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='navbar'>
      <img src={dropdown} alt="" className='navdropdpen' onClick={dropdown_toggle} />
      <div className='nav-logo'>
        <Link to="/"> <img src={logo} alt="logo" /></Link>
        <Link to='/'><p>Shoper</p></Link>
      </div>
      <ul ref={menuRef} className='nav-menue'>
        <li onClick={() => setMenu("shop")}> <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Shop</Link> {menu === "shop" ? <hr /> : null} </li>
        <li onClick={() => setMenu("Men")}> <Link style={{ textDecoration: 'none', color: 'black' }} to="/Men">Men</Link> {menu === "Men" ? <hr /> : null}</li>
        <li onClick={() => setMenu("Women")}> <Link style={{ textDecoration: 'none', color: 'black' }} to="/Women">Women</Link> {menu === "Women" ? <hr /> : null}</li>
        <li onClick={() => setMenu("kids")}> <Link style={{ textDecoration: 'none', color: 'black' }} to="/Kids">Kids</Link> {menu === "kids" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login">
      <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
        <div className="nav-cart-count">{gettotalcartitems()}</div>
        {isLoggedIn ? (
         <div className="user-menu">
         <img className="user_img" src={usericon} onClick={handleDropdownToggle} alt="User" width="55px" height="35px" />
         {showDropdown && (
  <div ref={dropdownRef} className="user-dropdown">
    <ul className="user-logout">
      <li><Link to="/my-orders">My Orders</Link></li>
      <li onClick={() => { localStorage.removeItem("auth-token"); window.location.replace('/'); }}>Logout</li>
    </ul>
  </div>
)}

          </div>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
       
        
      </div>
    </div>
  );
}

export default Navbar;
