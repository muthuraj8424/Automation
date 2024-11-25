import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="font-edu flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full shadow-sm"
          />
          <Link to="/" className="text-3xl font-ahom font-extrabold text-indigo-600">
            Magizh
          </Link>
        </div>

        <div className="hidden md:flex items-center p-2 space-x-8">
          
          <Link
            to="/AboutUS"
            className="border-0 bg-blue-500 rounded-lg p-2 text-white hover:text-indigo-600 text-lg font-medium transition-all duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
