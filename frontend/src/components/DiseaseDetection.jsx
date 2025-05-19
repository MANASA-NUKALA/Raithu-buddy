import React, { useState } from 'react';

const diseaseRules = [
  {
    disease: 'Rice Blast',
    symptoms: ['leaf spots', 'grayish-white spots', 'diamond-shaped lesions', 'neck rot'],
    affectedCrops: ['Rice'],
    description: 'Rice blast is a fungal disease that affects rice plants.',
    remedies: ['Use resistant varieties', 'Apply fungicides', 'Improve drainage'],
  },
  {
    disease: 'Sheath Blight',
    symptoms: ['oval spots', 'green-gray center', 'dark brown border'],
    affectedCrops: ['Rice'],
    description: 'Sheath blight is a fungal disease in rice.',
    remedies: ['Use disease-free seeds', 'Proper spacing', 'Fungicides'],
  },
  {
    disease: 'Tomato Leaf Curl Virus',
    symptoms: ['curling leaves', 'reduced leaf size', 'stunted growth'],
    affectedCrops: ['Tomato'],
    description: 'Tomato leaf curl virus is a viral disease.',
    remedies: ['Control whitefly population', 'Use resistant varieties'],
  },
  {
    disease: 'Early Blight',
    symptoms: ['dark spots', 'concentric rings', 'yellowing leaves'],
    affectedCrops: ['Tomato', 'Potato'],
    description: 'Early blight is a fungal disease that affects tomatoes and potatoes.',
    remedies: ['Use disease-free seeds', 'Crop rotation', 'Fungicides'],
  },
  {
    disease: 'Late Blight',
    symptoms: ['water-soaked spots', 'rapid spread', 'white mold'],
    affectedCrops: ['Potato', 'Tomato'],
    description: 'Late blight is a devastating disease.',
    remedies: ['Use resistant varieties', 'Fungicides', 'Improve drainage'],
  },
  {
    disease: 'Powdery Mildew',
    symptoms: ['white powdery patches'],
    affectedCrops: ['Grapes', 'Cucumber', 'Many Vegetables'],
    description: 'Powdery mildew is a common fungal disease.',
    remedies: ['Improve air circulation', 'Fungicides'],
  },
  {
    disease: 'Downy Mildew',
    symptoms: ['yellowish spots', 'white downy growth'],
    affectedCrops: ['Grapes', 'Cucumber', 'Many Vegetables'],
    description: 'Downy mildew is caused by fungus-like oomycetes.',
    remedies: ['Fungicides', 'Improve drainage'],
  },
  {
    disease: 'Wilt',
    symptoms: ['yellowing leaves', 'stunted growth', 'drooping leaves'],
    affectedCrops: ['Tomato', 'Cotton', 'Chickpea'],
    description: 'Wilt diseases are caused by soilborne pathogens.',
    remedies: ['Resistant varieties', 'Crop rotation'],
  },
  {
    disease: 'Cotton Leaf Curl Disease (CLCuD)',
    symptoms: ['leaf curling', 'vein thickening', 'leaf crumpling'],
    affectedCrops: ['Cotton'],
    description: 'Cotton leaf curl disease is caused by a complex of viruses.',
    remedies: ['Resistant varieties', 'Whitefly control'],
  },
  {
    disease: 'Chickpea Wilt',
    symptoms: ['sudden drooping', 'drying plant', 'browning stem'],
    affectedCrops: ['Chickpea'],
    description: 'Chickpea wilt is a soil-borne fungal disease.',
    remedies: ['Resistant varieties', 'Crop rotation', 'Seed treatment'],
  },
];

function DiseaseDetection() {
  const [symptomsInput, setSymptomsInput] = useState('');
  const [affectedCrop, setAffectedCrop] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDetect = () => {
    setLoading(true);
    setError(null);
    setSuggestions([]);

    setTimeout(() => {
      try {
        const matchedDiseases = diseaseRules.filter((rule) =>
          rule.affectedCrops.some((crop) => affectedCrop.toLowerCase().includes(crop.toLowerCase())) &&
          rule.symptoms.some((symptom) => symptomsInput.toLowerCase().includes(symptom.toLowerCase()))
        );
        setSuggestions(matchedDiseases);
        setLoading(false);
      } catch (e) { // Changed from catch (e: any)
        setError(e.message || 'An unexpected error occurred.');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Crop Disease Detection</h2>
        <p className="text-gray-600 mb-4">
          Describe the symptoms you observe, and specify the affected crop.
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="crop" className="block text-gray-700 text-sm font-bold mb-2">
          Affected Crop:
        </label>
        <input
          type="text"
          id="crop"
          placeholder="e.g., Tomato, Rice"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={affectedCrop}
          onChange={(e) => setAffectedCrop(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="symptoms" className="block text-gray-700 text-sm font-bold mb-2">
          Describe Symptoms:
        </label>
        <textarea
          id="symptoms"
          placeholder="e.g., brown spots, white powder"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={symptomsInput}
          onChange={(e) => setSymptomsInput(e.target.value)}
          rows={4}
        />
      </div>
      <button
        onClick={handleDetect}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={loading}
      >
        {loading ? 'Detecting...' : 'Detect Diseases'}
      </button>

      {error && (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Possible Diseases:</h3>
          {suggestions.map((diseaseObj) => (
            <div key={diseaseObj.disease} className="mb-4 border rounded-md shadow-sm p-4">
              <h4 className="text-lg font-semibold text-blue-700">{diseaseObj.disease}</h4>
              <p className="text-gray-600">{diseaseObj.description}</p>
              <p className="mb-2">
                <span className="font-semibold text-gray-700">Symptoms:</span> {diseaseObj.symptoms.join(', ')}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Affected Crops:</span> {diseaseObj.affectedCrops.join(', ')}
              </p>
              {diseaseObj.remedies && (
                <div className="mt-2">
                  <span className="font-semibold text-gray-700">Possible Remedies:</span>
                  <ul className="list-disc list-inside">
                    {diseaseObj.remedies.map((remedy, index) => (
                      <li key={index}>{remedy}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {suggestions.length === 0 && symptomsInput && !loading && (
        <p className="mt-4 text-gray-600">No matching diseases found.</p>
      )}
    </div>
  );
}

export default DiseaseDetection;
