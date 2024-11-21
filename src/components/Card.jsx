import React from "react";

const Card = ({ details }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {details.map((detail, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
        >
          <h3 className="text-xl font-bold text-blue-700 mb-2">{detail.name}</h3>
          <p className="text-gray-600 mb-4">{detail.content}</p>
          <span className="text-sm text-white bg-blue-600 px-4 py-1 rounded-full">
            {detail.service}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Card;
