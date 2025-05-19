import React from 'react';

const cropData = [
  { name: 'Wheat', price: '₹2200 / quintal', location: 'Hyderabad' },
  { name: 'Rice', price: '₹1800 / quintal', location: 'Vijayawada' },
  { name: 'Cotton', price: '₹6000 / quintal', location: 'Warangal' },
  { name: 'Maize', price: '₹1500 / quintal', location: 'Nizamabad' },
];

const CropPrices = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📈 Live Crop Prices</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Crop</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          {cropData.map((crop, index) => (
            <tr key={index} className="border-b hover:bg-green-50">
              <td className="py-2 px-4">{crop.name}</td>
              <td className="py-2 px-4">{crop.price}</td>
              <td className="py-2 px-4">{crop.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropPrices;
