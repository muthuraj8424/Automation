import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between mb-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img src={logo} alt="ShopMate Logo" className="h-12 w-12" />
            <span className="text-xl font-semibold">MAGIZH</span>
          </div>

          {/* Page Links in Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 md:mb-0">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
              <ul>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUS" className="text-gray-300 hover:text-blue-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-300 hover:text-blue-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300">Services</h3>
              <ul>
                <li>
                  <Link to="/Home_auto" className="text-gray-300 hover:text-blue-500">
                    Smart Lighting
                  </Link>
                </li>
                <li>
                  <Link to="/Gate_auto" className="text-gray-300 hover:text-blue-500">
                    Gate Automation
                  </Link>
                </li>
                <li>
                  <Link to="/home-automation" className="text-gray-300 hover:text-blue-500">
                    Home Automation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300">Support</h3>
              <ul>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-500">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-300 hover:text-blue-500">
                    Customer Service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-500">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-700"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} magizh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
