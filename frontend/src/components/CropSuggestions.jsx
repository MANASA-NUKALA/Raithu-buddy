import React from "react";

const CropSuggestions = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">🌱 Crop Suggestions</h2>
      <p>Input your soil type, season, and location to get crop suggestions.</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded">Suggest Crops</button>
    </div>
  );
};

export default CropSuggestions;
