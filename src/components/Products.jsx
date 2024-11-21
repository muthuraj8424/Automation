import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const Products = ({ options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = () => {
    console.log('vguyft7');
    
    setIsOpen(false); // Close the dropdown when an option is clicked
  };

  return (
    <div className="relative block">
      {/* Dropdown Button */}
      <button
        className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">Products</span>
        {isOpen ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown size={20} />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="hover:bg-blue-100 transition duration-200"
            >
              <Link
                to={option.label}
                className="block px-4 py-2 text-gray-700 hover:text-blue-700"
                onClick={handleOptionClick}
              >
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
