import React from "react";
import doorSensor from "../assets/doorSensor.png";
import panicSwitch from "../assets/panicSwitch.png";
import pirSensor from "../assets/pirSensor.png";
import vibrationSensor from "../assets/vibrationSensor.png";
import remoteController from "../assets/remoteController.png";
import shutterSensor from "../assets/shutterSensor.png";

function Home_auto() {
  // Product details
  const products = [
    {
      img: doorSensor,
      title: "Door Sensor",
      description:
        "Enhance your security with door sensors that alert you about unauthorized access.",
    },
    {
      img: panicSwitch,
      title: "Panic Switch",
      description:
        "Trigger immediate alerts in emergency situations with our easy-to-use panic switches.",
    },
    {
      img: pirSensor,
      title: "PIR Sensor",
      description:
        "Detect motion and ensure security with high-precision passive infrared sensors.",
    },
    {
      img: vibrationSensor,
      title: "Vibration Sensor",
      description:
        "Monitor unusual vibrations on surfaces to protect against break-ins and tampering.",
    },
    {
      img: remoteController,
      title: "Remote Controller",
      description:
        "Easily manage your home automation system with our intuitive remote controller.",
    },
    {
      img: shutterSensor,
      title: "Shutter Sensor",
      description:
        "Secure your shutters with sensors designed to detect and alert for movement.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Our Products
      </h1>
      <div className="grid gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-100 shadow-md rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-indigo-500 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home_auto;
