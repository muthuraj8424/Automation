import React from "react";
import bg from "../assets/bg.gif"; 

function Aboutjs() {
  return (
    <>
      
      <div className="p-8 bg-gray-100">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-indigo-600 text-center mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
          Welcome to Karyoun Innovation, the leading Ed-tech company that is revolutionizing the way businesses and educational institutions collaborate for technological advancement and growth. At Karyoun Innovation, we are dedicated to providing cutting-edge solutions that bridge the gap between education, technology, and business.
          </p>
        </div>
      </div>

      
      <div className="p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={bg}  
              alt="Why Choose ShopMate"
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 md:ml-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              Why Choose Magizh?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to Karyoun Innovation, the leading Ed-tech company that is revolutionizing the way businesses and educational institutions collaborate for technological advancement and growth. At Karyoun Innovation, we are dedicated to providing cutting-edge solutions that bridge the gap between education, technology, and business.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Competitive pricing for high-quality products</li>
              <li>Fast and reliable shipping</li>
              <li>Exceptional customer support available 24/7</li>
              <li>Commitment to sustainability and eco-friendly practices</li>
              <li>Regular promotions and exclusive discounts for loyal customers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            "Our mission is to provide a seamless online shopping experience by
            offering high-quality products, exceptional customer service, and
            fast, reliable delivery. We are committed to empowering customers
            with a diverse range of products, making their shopping experience
            simple, enjoyable, and affordable. Through innovation and
            sustainable practices, we strive to meet the evolving needs of our
            customers while fostering a community built on trust and
            satisfaction."
          </p>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="p-8 bg-gray-100">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            "Our vision is to be the leading global e-commerce platform, known
            for delivering unparalleled value to customers. We aim to transform
            the way people shop by creating an ecosystem that connects sellers
            and buyers across the world, enabling access to the best products,
            at the best prices, with unmatched convenience. Our vision is driven
            by a commitment to innovation, sustainability, and
            customer-centricity, ensuring we make a positive impact on society
            and the environment."
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutjs;
