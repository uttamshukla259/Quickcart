import React, { useState, useEffect } from "react";
import { Link,  useNavigate } from "react-router-dom";
import "./Signup.css";
import { RiH4 } from "react-icons/ri";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save user data to localStorage
    const userData = { email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Show success message and redirect to login
    alert("Signup successfully!");
    navigate("/login");
  };

  
 
  useEffect(() => {
    const auth = localStorage.getItem("userData");
    if (auth) {
      navigate("/");
    }
  });
  return (
    <div className="signup-page">
     

      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <form className="signup-form" onSubmit={handleSignup}>
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
          <input
            type="password"
            className="signup-input"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
