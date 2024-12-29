import React from "react";
import "./Signup.css"; 
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signup-page">
      <h2 className="access-text">
        Get access to your Orders, Wishlist and Recommendations
      </h2>
      <div className="signup-box">
        <h2 className="signup-title">Login</h2>
        <form className="signup-form">
          <input
            type="email"
            className="signup-input"
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            className="signup-input"
            placeholder="Enter password"
            required
          />
          <button type="submit" className="signup-button">
            Login
          </button>
          <p className="p-tag">You agree to our terms and policies</p>
          <button className="signup-button">
            <Link to="/signup" className="signup-link">
              Create account
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
