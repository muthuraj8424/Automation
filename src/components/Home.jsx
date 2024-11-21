import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import sideImage from "../assets/sideImage.png";

const Home = () => {
  const [enquiry, setEnquiry] = useState(false);
  const [email, setEmail] = useState("");

  function handleEnquiry(e) {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    axios
      .post("http://localhost:5000/enquiry", { email })
      .then((res) => {
        console.log(res);
        setEnquiry(false); // Hide email input after submission
        setEmail(""); // Reset the email field
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error submitting your enquiry.");
      });
  }

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-lg p-4 mb-0">
        <h1 className="text-2xl font-bold">Home And Gate Automation</h1>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 h-screen p-6 mt-0">
        {/* Image */}
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src={sideImage} // Replace with your image path
            alt="Company Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Welcome to ShopMate
          </h1>
          <p className="text-lg text-gray-700">
            Your one-stop destination for all your shopping needs! Explore a
            wide range of categories, from electronics and fashion to home
            essentials. Discover the latest trends, exclusive deals, and
            handpicked products loved by millions.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Enjoy a seamless shopping experience with secure payments, fast
            delivery, and 24/7 support.
          </p>
          <button
            onClick={(e) => setEnquiry(!enquiry)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg mt-6"
          >
            Enquire Now
          </button>

          {enquiry && (
            <div className="mt-4">
              <input
                type="email"
                className="p-3 rounded-lg border border-gray-300 w-full md:w-auto"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                style={{ color: "black" }}
              />
              <button
                onClick={handleEnquiry}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 md:ml-2"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Service 1 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-indigo-500">Smart Lighting</h3>
            <p className="text-gray-700 mt-4">
              Experience intelligent lighting solutions tailored to your mood,
              style, and energy needs. Transform your space with the touch of a button.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-indigo-500">Gate Automation</h3>
            <p className="text-gray-700 mt-4">
              Secure and simplify your property access with advanced gate
              automation systems for modern living.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-indigo-500">Home Automation</h3>
            <p className="text-gray-700 mt-4">
              Upgrade your lifestyle with smart home solutions. Control
              everything from lighting to appliances effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
