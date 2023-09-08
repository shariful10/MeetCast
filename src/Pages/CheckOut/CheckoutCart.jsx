import React from "react";

const CheckoutCart = ({ monthlyData }) => {
    const {title,description,features,price} = monthlyData;
    console.log(title,);
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-indigo-500 text-white text-center p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="list-disc pl-6 mb-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">${price}</p>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
