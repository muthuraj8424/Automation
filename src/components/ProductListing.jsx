import React from "react";
import { Link, useParams } from "react-router-dom";
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
import beam_snsor from "../assets/beam_sen.jpg"
import remote_controller1 from "../assets/rem_con.jpg"
import vib_sen from "../assets/vib_sen.jpg"
// import Cart from "./Cart"; // Import the Cart component

function ProductListing() {
  const { id } = useParams();
  // const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      image: wei500,
      name: "500kg Sliding Gate Motor",
      offer: "10% Off",
      title: "Reliable Motor for Medium Gates",
      description:
        "The 500kg Sliding Gate Motor is a reliable solution for residential and commercial gates weighing up to 500kg. It ensures smooth and quiet operation with advanced motor technology. The motor is designed to be energy-efficient while providing powerful performance. Its weather-resistant build guarantees long-lasting durability. Integrated safety features like obstacle detection ensure user safety.",
    },
    {
      id: 2,
      image: rack9mm,
      name: "9mm Gear Rack for Sliding Gates",
      offer: "Special Price",
      title: "Durable Gear Rack for Sliding Gates",
      description:
        "This 9mm gear rack is an essential accessory for sliding gate automation. Made from durable materials, it ensures smooth and precise motion. The gear rack is compatible with most sliding gate motors, offering versatility. Its corrosion-resistant build ensures long-term reliability, even in outdoor conditions. Designed for easy installation, it reduces setup time and enhances overall gate performance.",
    },
    {
      id: 3,
      image: wei2000,
      name: "2000kg Industrial Gate Motor",
      offer: "Save $50",
      title: "Heavy-Duty Motor for Industrial Gates",
      description:
        "This heavy-duty motor is ideal for industrial applications with gates weighing up to 2000kg. Engineered to handle extreme loads, it provides robust torque for smooth operation. Its rugged design ensures durability even in harsh weather conditions. The motor is equipped with advanced safety features like thermal overload protection. It also supports multiple control modes for flexibility.",
    },
    {
      id: 4,
      image: wei800,
      name: "800kg Heavy Duty Sliding Gate Motor",
      offer: "Flat Discount",
      title: "High-Performance Motor for Large Gates",
      description:
        "Built for medium to large gates, this motor supports gates weighing up to 800kg. Its heavy-duty design ensures consistent performance under demanding conditions. The motor operates quietly, making it suitable for residential and commercial environments. Weather resistance and advanced obstacle detection enhance its usability. Remote control compatibility offers convenience for daily use.",
    },
    {
      id: 5,
      image: Wei1200,
      name: "1200kg Automatic Sliding Gate Opener",
      offer: "20% Off",
      title: "Automatic Motor for Smooth Operation",
      description:
        "Designed for automatic sliding gates, this motor handles gates weighing up to 1200kg. It features automatic closing and obstacle detection for enhanced safety. Its compact design ensures easy installation and low maintenance. Weather-proof construction ensures durability in outdoor conditions. Remote operation makes it an efficient and user-friendly solution.",
    },
    {
      id: 6,
      image: srm_swing,
      name: "Swing Arm Gate Motor",
      offer: "Limited Deal",
      title: "Reliable Motor for Swing Gates",
      description:
        "Perfect for swing gates, this motor ensures precise and reliable operation. It features adjustable speed settings for optimal performance. Advanced obstacle detection technology ensures safety during use. Its robust construction makes it suitable for gates of various sizes. Designed for long-term use, it resists wear and tear from daily operations.",
    },
    {
      id: 7,
      image: pirSensor,
      name: "PIR Motion Sensor for Automatic Gates",
      offer: "Best Seller",
      title: "Advanced Motion Sensor for Security",
      description:
        "This sensor uses Passive Infrared (PIR) technology to detect movement, triggering automatic gate operations. It improves security by monitoring activity near the gate. The device is easy to install and integrates seamlessly with most gate automation systems. Its wide detection range ensures reliable operation in both residential and commercial setups. Weather-resistant design guarantees durability in outdoor environments.",
    },
    {
      id: 8,
      image: remoteController,
      name: "Wireless Remote Control for Gates",
      offer: "Top Choice",
      title: "Convenient Wireless Gate Control",
      description:
        "The wireless remote control offers seamless operation of automated gates. It features a compact design with an intuitive button layout for ease of use. The remote supports multiple channels, allowing control of multiple gates from a single device. Its advanced frequency technology ensures reliable connectivity over long distances. Durable and lightweight, it’s designed for everyday use.",
    },
    {
      id: 9,
      image: shuttersensor,
      name: "Shutter Door Safety Sensor",
      offer: "New Arrival",
      title: "Safety Sensor for Shutter Doors",
      description:
        "Ideal for garage or industrial shutter doors, this sensor ensures operational safety. It detects obstructions, preventing accidents during door operation. The sensor is designed to work with automated systems, enhancing convenience and reliability. Its durable build ensures consistent performance in high-traffic areas. Easy to install and maintain, it’s a practical safety solution.",
    },
    {
      id: 10,
      image: vacum,
      name: "Vacuum Seal Kit for Gate Automation",
      offer: "Hot Deal",
      title: "Protective Vacuum Seal Kit",
      description:
        "This vacuum seal kit protects gate systems from dust, water, and external damage. It ensures smooth and reliable operation by preventing environmental interference. The kit is easy to install and designed to fit most gate automation setups. Made from high-quality materials, it provides long-lasting performance. A perfect accessory to maintain the efficiency of your automated gates.",
    },
    {
      id: 11,
      image: sensor110,
      name: "110° Angle Motion Sensor for Gates",
      offer: "Trending Now",
      title: "Wide-Angle Motion Sensor",
      description:
        "With a 110° detection range, this sensor is perfect for automated gates. It uses advanced motion detection technology to ensure seamless gate operation. The sensor is designed to improve convenience and security by detecting movement efficiently. Its compact and robust design makes it suitable for outdoor use. Easy installation and reliable performance make it a preferred choice.",
    },
    {
      id: 12,
      image: beam_snsor,
      name: "Infrared Beam Safety Sensor",
      offer: "Limited Stock",
      title: "Obstacle Detection Sensor",
      description:
        "This sensor features infrared technology to detect obstacles in the gate’s path. It enhances safety by preventing accidental gate closures. Its compact design is suitable for both sliding and swing gates. The device operates effectively in various weather conditions, ensuring year-round reliability. Designed for safety, it integrates effortlessly with modern gate systems.",
    },
    {
      id: 13,
      image: remote_controller1,
      name: "Advanced Gate Remote Control",
      offer: "Exclusive",
      title: "High-Tech Gate Remote Control",
      description:
        "This remote control offers advanced features for managing gate systems. It has a sleek and ergonomic design for comfortable use. The remote is equipped with a long-range signal, ensuring uninterrupted operation. Compatible with various gate automation systems, it provides versatility. Its robust construction ensures durability, making it perfect for frequent use.",
    },
    {
      id: 14,
      image: vib_sen,
      name: "Vibration Sensor for Gates",
      offer: "Best Value",
      title: "Tamper Detection Vibration Sensor",
      description:
        "This sensor monitors vibrations and triggers alerts for unusual activity. It enhances the security of automated gates by detecting tampering or forced entry attempts. The device is compatible with various gate systems, making it versatile. Its robust construction ensures long-lasting performance in outdoor conditions. Simple installation and user-friendly features make it an ideal choice for advanced gate setups.",
    },
  ];
  

  const product = products.find((product) => product.id === parseInt(id));



  return (
    <div className="container mx-auto p-4">
      {product ? (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 md:max-w-3xl md:flex md:items-center md:space-x-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg mb-4 md:w-1/2 md:h-80"
          />
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-4">{product.title}</p>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <Link
              to={`/enquiry/${product.name}`}
              className="block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition md:inline-block md:w-auto"
            >
              Enquiry
            </Link>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-red-500 text-xl font-bold">
          Product not found
        </h1>
      )}
    </div>
  );
}

export default ProductListing;
