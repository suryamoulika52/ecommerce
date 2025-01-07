import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";


const Navbar = () => {

  const {cartItems }= useCart()

  return (
    <div className="navbar-section">

      <div className="navSection">
<Link to='/' className="custom-link">
  <div className="title">
    <h2 style={{ color: "white", fontSize: "1.2rem", fontWeight: "bold", borderStyle: "none", padding: "5px", marginLeft: "20px" }}>E-Mart</h2>
  </div>
</Link>

        
        <div class="nav-address border">
        
        
    <p class="address-first">Deliver to</p>
    <div class="address-icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#fefbfb" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        <p class="address-second">India</p>
    </div>
</div> 

        <div class="nav-search">
    <select class="nav-select" >
        <option >All</option>
    </select>
    <input placeholder="Search E-Mart" class="search-input"/>
    <div class="search-icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        
    </div>
</div>
<div class="nav-flag border">
    <div class="flag-icon">
        <img width="32" height="32" src="https://img.icons8.com/color/32/india.png" alt="india"/>
   <p class="flag-info">
    EN<select class="flag-info1">
        <option ></option>
    </select>
   </p>
    </div>
</div>
        <div class="user border">
    <p class="signin-info">Hello,sign in</p>
    <p class="signin-info1">Accounts&Lists</p>
    
</div>
<div class="nav-return border">
    <p class="signin-info">Returns</p>
    <p class="signin-info1">&Orders</p>
    
</div>
          <Link to= '/cart'>
          <div className="cart">
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 576 512"><path fill="#fafcff" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
         
          Cart
          <span>
            {cartItems.length}
          </span>
          </div>
          </Link>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>
          

       

          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;