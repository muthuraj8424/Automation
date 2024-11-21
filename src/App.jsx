import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutjs from "./components/Aboutjs";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css"
import Gate_auto from "./components/Gate_auto";
import Home_auto from "./components/Home_auto";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUS" element={<Aboutjs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home_auto" element={<Home_auto />} />
        <Route path="/Gate_auto" element={<Gate_auto />} />
      </Routes>
    </Router>
  );
}

export default App;
