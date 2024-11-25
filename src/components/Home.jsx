import React from "react";
import ProductCom from "./ProductCom";
import wei500 from "../assets/500kg.jpg";
import rack9mm from "../assets/9mm_rack.jpg";
import wei2000 from "../assets/200kg.jpg";
import wei800 from "../assets/800kg.jpg";
import Wei1200 from "../assets/1200kg.jpg";
import srm_swing from "../assets/arm_swing.jpg";
import pirSensor from "../assets/pirSensor.png";
import remoteController from "../assets/remoteController.png";
import shuttersensor from "../assets/shutterSensor.png";
import sensor110 from "../assets/t-110.jpg";
import vacum from "../assets/vaccum.jpg";
import beam_snsor from "../assets/beam_sen.jpg";
import remote_controller1 from "../assets/rem_con.jpg";
import vib_sen from "../assets/vib_sen.jpg";
import { Link } from "react-router-dom";

function Home() {
  const products = [
    {
      id: 1,
      image: wei500,
      name: "500kg Sliding Gate Motor",
      offer: "10% Off",
    },
    {
      id: 2,
      image: rack9mm,
      name: "9mm Gear Rack for Sliding Gates",
      offer: "Special Price",
    },
    {
      id: 3,
      image: wei2000,
      name: "2000kg Industrial Gate Motor",
      offer: "Save $50",
    },
    {
      id: 4,
      image: wei800,
      name: "800kg Heavy Duty Sliding Gate Motor",
      offer: "Flat Discount",
    },
    {
      id: 5,
      image: Wei1200,
      name: "1200kg Automatic Sliding Gate Opener",
      offer: "20% Off",
    },
    {
      id: 6,
      image: srm_swing,
      name: "Swing Arm Gate Motor",
      offer: "Limited Deal",
    },
    {
      id: 7,
      image: pirSensor,
      name: "PIR Motion Sensor for Automatic Gates",
      offer: "Best Seller",
    },
    {
      id: 8,
      image: remoteController,
      name: "Wireless Remote Control for Gates",
      offer: "Top Choice",
    },
    {
      id: 9,
      image: shuttersensor,
      name: "Shutter Door Safety Sensor",
      offer: "New Arrival",
    },
    {
      id: 10,
      image: vacum,
      name: "Vacuum Seal Kit for Gate Automation",
      offer: "Hot Deal",
    },
    {
      id: 11,
      image: sensor110,
      name: "110° Angle Motion Sensor for Gates",
      offer: "Trending Now",
    },
    {
      id: 12,
      image: beam_snsor,
      name: "Infrared Beam Safety Sensor",
      offer: "Limited Stock",
    },
    {
      id: 13,
      image: remote_controller1,
      name: "Advanced Gate Remote Control",
      offer: "Exclusive",
    },
    {
      id: 14,
      image: vib_sen,
      name: "Vibration Sensor for Gates",
      offer: "Best Value",
    },
  ];

  const homeProucts = [{
    
  }]
  const offerProducts = products.slice(0, 4); // Top 4 products for the offer section

  const motors = products.filter((product) =>
    product.name.toLowerCase().includes("motor")
  );
  const sensors = products.filter((product) =>
    product.name.toLowerCase().includes("sensor")
  );
  const accessories = products.filter(
    (product) =>
      !product.name.toLowerCase().includes("motor") &&
      !product.name.toLowerCase().includes("sensor")
  );

  return (
    <div className="container mx-auto p-4">
      {/* Grouped Offer Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Today's Exclusive Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
          {offerProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border rounded-lg shadow-lg hover:shadow-xl p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
              />

              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.offer}
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-700">
                  {product.name}
                </h3>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/product-listing/${product.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </Link>
                <Link
                  to={`/enquiry/${product.name}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Enquiry
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mx-3">
        <h1 className="text-2xl font-bold text-center">Gate Automation</h1>
      </div>

      {/* Gate Motors Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Gate Motors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {motors.map((motor) => (
            <div
              key={motor.id}
              className="flex flex-col justify-between bg-white border rounded-lg shadow-md hover:shadow-lg p-4 transition-transform transform hover:scale-105"
            >
              <div className="flex-grow">
                <img
                  src={motor.image}
                  alt={motor.name}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-700">
                  {motor.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{motor.offer}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/product-listing/${motor.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </Link>
                <Link
                  to={`/enquiry/${motor.name}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Enquiry
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gate Automation Sensors Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Gate Automation Sensors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sensors.map((sensor) => (
            <div
              key={sensor.id}
              className="flex flex-col justify-between bg-white border rounded-lg shadow-md hover:shadow-lg p-4 transition-transform transform hover:scale-105"
            >
              <div className="flex-grow">
                <img
                  src={sensor.image}
                  alt={sensor.name}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-700">
                  {sensor.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{sensor.offer}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/product-listing/${sensor.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </Link>
                <Link
                  to={`/enquiry/${sensor.name}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Enquiry
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gate Automation Accessories Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Gate Automation Accessories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="flex flex-col justify-between bg-white border rounded-lg shadow-md hover:shadow-lg p-4 transition-transform transform hover:scale-105"
            >
              <div className="flex-grow">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-700">
                  {accessory.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{accessory.offer}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/product-listing/${accessory.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </Link>
                <Link
                  to={`/enquiry/${accessory.name}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Enquiry
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
