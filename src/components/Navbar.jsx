import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const options = [
    { value: "Home", label: "Home_auto" },
    { value: "Gate", label: "Gate_auto" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full shadow-sm"
          />
          <span className="text-3xl font-extrabold text-indigo-600">
            Magizh
          </span>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 text-2xl md:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/AboutUS"
            className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-all duration-200"
          >
            About Us
          </Link>
          <div className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-all duration-200">
            <Products options={options} />
          </div>
          <Link
            to="/Contact"
            className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/AboutUS"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-all duration-200"
            >
              About Us
            </Link>
            <div className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-all duration-200">
              <Products options={options} />
            </div>
            <Link
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 text-lg font-medium transition-all duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
