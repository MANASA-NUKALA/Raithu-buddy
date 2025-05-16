import React, { useState, useEffect } from "react";

const CropPrices = () => {
  // Example state, you can fetch live data here
  const [prices, setPrices] = useState([
    { crop: "Wheat", price: 24 },
    { crop: "Rice", price: 30 },
    { crop: "Tomato", price: 15 },
  ]);

  // Placeholder: You can fetch live prices from an API here with useEffect

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">💰 Live Crop Prices</h2>
      <ul className="list-disc pl-6 space-y-1">
        {prices.map(({ crop, price }) => (
          <li key={crop}>
            {crop} - ₹{price}/kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CropPrices;
