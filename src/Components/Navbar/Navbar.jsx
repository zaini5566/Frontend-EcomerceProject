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
  const menuRef = useRef(null);
  const [menu, setMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth-token') !== null);
  const { gettotalcartitems } = useContext(ShopContext);
  const navigate = useNavigate();

  // Function to toggle dropdown visibility
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  // Toggle user menu dropdown
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  // Close the dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false); // Close user dropdown
    }
    if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains('navdropdpen')) {
      menuRef.current.classList.remove('nav-menu-visible'); // Close menu dropdown
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to handle route change and close the menu
  const handleMenuClick = (route) => {
    setMenu(route); // Set active menu item
    menuRef.current.classList.remove('nav-menu-visible'); // Close the menu
    navigate(route); // Navigate to the route
  };

  return (
    <div className='navbar'>
      <img src={dropdown} alt="" className='navdropdpen' onClick={dropdown_toggle} />
      <div className='nav-logo'>
        <Link to="/"> <img src={logo} alt="logo" /></Link>
        <Link to='/'><p>Shoper</p></Link>
      </div>
      <ul ref={menuRef} className='nav-menue'>
        <li onClick={() => handleMenuClick("/")}> 
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Shop</Link> 
          {menu === "/" ? <hr /> : null} 
        </li>
        <li onClick={() => handleMenuClick("/Men")}> 
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/Men">Men</Link> 
          {menu === "/Men" ? <hr /> : null}
        </li>
        <li onClick={() => handleMenuClick("/Women")}> 
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/Women">Women</Link> 
          {menu === "/Women" ? <hr /> : null}
        </li>
        <li onClick={() => handleMenuClick("/Kids")}> 
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/Kids">Kids</Link> 
          {menu === "/Kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login">
        <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
        <div className="nav-cart-count">{gettotalcartitems()}</div>
        {isLoggedIn ? (
          <div className="user-menu">
            <img className="user_img" src={usericon} onClick={handleDropdownToggle} alt="User" width="55px" height="30px" />
            {showDropdown && (
              <div ref={dropdownRef} className="user-dropdown">
                <ul className="user-logout">
                  <li><Link to="/my-orders">My Orders</Link></li>
                  <li onClick={() => { 
                    localStorage.removeItem("auth-token"); 
                    window.location.replace('/'); 
                  }}>Logout</li>
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
