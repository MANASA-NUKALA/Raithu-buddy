import React from "react";

const DiseaseDetection = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">🐛 Crop Disease Detection</h2>
      <input type="file" className="mb-2" />
      <p className="text-gray-700">Upload a crop image to detect disease.</p>
    </div>
  );
};

export default DiseaseDetection;
