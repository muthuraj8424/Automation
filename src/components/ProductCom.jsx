import React from "react";
import { Link } from "react-router-dom";
// import { useCart } from "./CartContext";

function ProductCom({ product }) {
//   const { addToCart } = useCart();  // Use addToCart from context

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

  return (
    <div style={{ margin: "20px", textAlign: "center", width: "200px" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <h4>{product.name}</h4>

     
      <Link to={`/${product.id}`} className="text-blue-500 mt-2 mb-2 block">
        View Details
      </Link>
      <Link to={`/enquiry/${product.name}`}
     
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        for any queries
      </Link>
    </div>
  );
}

export default ProductCom;
