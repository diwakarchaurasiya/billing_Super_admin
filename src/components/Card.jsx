import React from "react";

const Card = ({ icon: Icon, title, value, color }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
      <Icon className={`text-4xl mb-2 ${color}`} />
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default Card;
