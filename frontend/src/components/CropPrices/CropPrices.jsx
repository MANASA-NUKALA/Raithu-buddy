import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Loader2 } from 'lucide-react'; // Optional loading icon

const CropPrices = () => {
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/CropPrices.csv')
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setCropData(results.data);
            setLoading(false);
          },
        });
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-50 px-6 py-10 flex flex-col items-center font-sans">
      <h2 className="text-4xl font-extrabold text-green-800 mb-8 animate-fade-in">
        🌾 Live Crop Market Prices
      </h2>

      {loading ? (
        <div className="flex items-center gap-3 text-green-700 text-xl animate-pulse">
          <Loader2 className="animate-spin" />
          Fetching fresh data...
        </div>
      ) : (
        <div className="w-full max-w-5xl shadow-xl rounded-3xl overflow-hidden border border-green-300 bg-white animate-fade-in-up">
          <table className="w-full text-lg">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-4 px-6 text-left">🌿 Crop</th>
                <th className="py-4 px-6 text-left">💰 Price (Model ₹)</th>
                <th className="py-4 px-6 text-left">📍 Location</th>
              </tr>
            </thead>
            <tbody className="text-green-900 bg-white divide-y divide-green-100">
              {cropData.map((crop, index) => (
                <tr
                  key={index}
                  className="hover:bg-green-50 transition-all duration-200"
                >
                  <td className="py-4 px-6 font-semibold">{crop.CommName}</td>
                  <td className="py-4 px-6">{crop.Model}</td>
                  <td className="py-4 px-6">{crop.YardName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-8 text-green-700 italic text-base">
        Empowering farmers with real-time crop pricing 💪🌱
      </p>
    </div>
  );
};

export default CropPrices;
