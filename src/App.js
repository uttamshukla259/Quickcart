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
import PrivateComp from "./PrivateComp";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <CartProvider>
      <Router>
        <Navbar query={query} setQuery={setQuery} />
        <Routes>
          
          <Route element={<PrivateComp />}>
            <Route path="/" element={<Home query={query} />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
