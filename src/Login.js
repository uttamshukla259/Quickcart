import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate(""); // Redirect to the home page if user is already logged in
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Check if email and password match
    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      // alert("Login successful!");

      // Save login state to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(userData));

      navigate("/"); // Redirect to the home page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="signup-page">
      <h2 className="access-text">
        Get access to your Orders, Wishlist and Recommendations
      </h2>
      <div className="signup-box">
        <h2 className="signup-title">Login</h2>
        <form className="signup-form" onSubmit={handleLogin}>
          <input
            type="email"
            className="signup-input"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="signup-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
