import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { FaHome, FaHeart, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ query, setQuery }) => {
  const { state } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TechCart
        </Link>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search products..."
            className="navbar-search-input"
            value={query} 
            onChange={(e) => setQuery(e.target.value.toLowerCase())} 
          />
          <button className="navbar-search-btn">Search</button>
        </div>

        <ul className="navbar-icons">
          <li className="navbar-item">
            <Link to="/">
              <FaHome className="navbar-icon" />
              <span className="navbar-text">Home</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/wishlist">
              <FaHeart className="navbar-icon" />
              <span className="navbar-text">Wishlist</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart">
              <span className="count">{state.totalQuantity}</span>
              <FaShoppingCart className="navbar-icon" />
              <span className="navbar-text">Cart</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login">
              <FaSignInAlt className="navbar-icon" />
              <span className="navbar-text">Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
