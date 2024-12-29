import React from "react";
import "./Signup.css"; 
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
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
          <input
            type="password"
            className="signup-input"
            placeholder="Confirm password"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <p className="p-tag">You agree to our terms and policies</p>
          <button className="signup-button">
            <Link to="/login" className="signup-link">
              Already have an account? Login
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
