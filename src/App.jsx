import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutjs from "./components/Aboutjs";
// import Products from "./components/Products";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProductDetails from "./components/ProductListing";
// import { CartProvider } from "./components/CartContext";
// import Cart from "./components/Cart";
// // import Contactcom from "./components/ContactCom";
function App() {
  return (
   
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUS" element={<Aboutjs />} />
          {/* <Route path="/Products" element={<Products />} />
          <Route path="/conatct" element={<Contactcom />} /> */}
          <Route path="//enquiry/:p_name" element={<Contact />} />
          <Route path="/product-listing/:id" element={<ProductDetails />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
   
  );
}

export default App;
