import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Profile from "./Profile";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import { CartProvider } from "./CartContext";

const App = () => {
  const [query, setQuery] = useState(""); // State to hold search query

  return (
    <CartProvider>
      <Router>
        {/* Pass query and setQuery to Navbar */}
        <Navbar query={query} setQuery={setQuery} />
        <Routes>
          {/* Pass query as a prop to Home */}
          <Route path="/" element={<Home query={query} />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
