import React, { useState } from 'react';

const cropData = [
    {
        soilType: 'Black Soil',
        season: 'Kharif',
        location: 'Hyderabad',
        crops: ['Cotton', 'Rice', 'Sugarcane', 'Pigeonpea'],
        description: "Black soils are well-suited for these crops due to their moisture retention capacity.",
    },
    {
        soilType: 'Red Soil',
        season: 'Kharif',
        location: 'Hyderabad',
        crops: ['Rice', 'Groundnut', 'Maize', 'Millets'],
        description: "Red soils with proper irrigation can support these crops.",
    },
    {
        soilType: 'Laterite Soil',
        season: 'Kharif',
        location: 'Hyderabad',
        crops: ['Rice', 'Rubber', 'Coffee', 'Tea'],
        description: "Laterite soils are suitable for plantation crops with high rainfall.",
    },
    {
        soilType: 'Black Soil',
        season: 'Rabi',
        location: 'Hyderabad',
        crops: ['Wheat', 'Sorghum', 'Chickpea', 'Linseed'],
        description: "These crops thrive in the post-monsoon season in black soils.",
    },
    {
        soilType: 'Red Soil',
        season: 'Rabi',
        location: 'Hyderabad',
        crops: ['Sorghum', 'Groundnut', 'Pulses', 'Sunflower'],
        description: "Rabi crops in red soils benefit from the residual moisture.",
    },
    {
        soilType: 'Alluvial Soil',
        season: 'Kharif',
        location: 'Hyderabad',
        crops: ['Rice', 'Jute', 'Sugarcane', 'Maize'],
        description: "Alluvial soils are fertile and support a wide range of crops.",
    },
    {
        soilType: 'Alluvial Soil',
        season: 'Rabi',
        location: 'Hyderabad',
        crops: ['Wheat', 'Barley', 'Potato', 'Mustard'],
        description: "Alluvial soils are well-suited for rabi crops.",
    },
    {
        soilType: 'Sandy Soil',
        season: 'Kharif',
        location: 'Hyderabad',
        crops: ['Millets', 'Groundnut', 'Castor', 'Sesame'],
        description: "Sandy soils with proper irrigation can support drought-resistant crops.",
    },
    {
        soilType: 'Sandy Soil',
        season: 'Rabi',
        location: 'Hyderabad',
        crops: ['Sorghum', 'Pulses', 'Mustard', 'Cumin'],
        description: "Rabi crops that are drought-tolerant can be grown in sandy soils.",
    },

    {
        soilType: 'Black Soil',
        season: 'Kharif',
        location: 'Warangal',
        crops: ['Cotton', 'Rice', 'Maize', 'Red Gram'],
        description: "Black soils in Warangal are good for cotton and rice.",
    },
    {
        soilType: 'Red Soil',
        season: 'Kharif',
        location: 'Warangal',
        crops: ['Groundnut', 'Rice', 'Pigeonpea', 'Sorghum'],
        description: "Red soils in Warangal are suitable for groundnut.",
    },
    {
        soilType: 'Black Soil',
        season: 'Rabi',
        location: 'Karimnagar',
        crops: ['Rice', 'Wheat', 'Chickpea', 'Sorghum'],
        description: "Black soil in Karimnagar supports rice and wheat in Rabi.",
    },
    {
        soilType: 'Red Soil',
        season: 'Rabi',
        location: 'Karimnagar',
        crops: ['Groundnut', 'Sunflower', 'Pulses'],
        description: "Red soils in Karimnagar are used for groundnut and sunflower.",
    },
    {
        soilType: 'Alluvial Soil',
        season: 'Kharif',
        location: 'Nalgonda',
        crops: ['Rice', 'Sugarcane', 'Maize'],
        description: "Alluvial soils in Nalgonda are good for rice.",
    },
    {
        soilType: 'Red Soil',
        season: 'Kharif',
        location: 'Nalgonda',
        crops: ['Rice', 'Groundnut', 'Jowar'],
        description: "Red soils in Nalgonda support groundnut.",
    },
    {
        soilType: 'Black Soil',
        season: 'Kharif',
        location: 'Mahbubnagar',
        crops: ['Cotton', 'Groundnut', 'Pigeonpea'],
        description: 'Black soils in Mahbubnagar are suitable for cotton.',
    },
    {
        soilType: 'Red Soil',
        season: 'Kharif',
        location: 'Mahbubnagar',
        crops: ['Groundnut', 'Rice', 'Jowar'],
        description: 'Red soils in Mahbubnagar are used for groundnut.',
    },
    {
        soilType: 'Black Soil',
        season: 'Rabi',
        location: 'Rangareddy',
        crops: ['Sorghum', 'Chickpea', 'Wheat'],
        description: 'Black soils in Rangareddy are good for sorghum.',
    },
    {
        soilType: 'Red Soil',
        season: 'Rabi',
        location: 'Rangareddy',
        crops: ['Groundnut', 'Sunflower', 'Pulses'],
        description: 'Red soils in Rangareddy are used for groundnut.',
    },
];

// Available options for dropdowns
const soilTypes = ['Black Soil', 'Red Soil', 'Laterite Soil', 'Alluvial Soil', 'Sandy Soil'];
const seasons = ['Kharif', 'Rabi', 'Zaid'];
const districts = ['Hyderabad', 'Warangal', 'Karimnagar', 'Nalgonda', 'Mahbubnagar', 'Rangareddy']; // Added districts

function CropSuggestions() {
    const [soilType, setSoilType] = useState('');
    const [season, setSeason] = useState('');
    const [location, setLocation] = useState('Hyderabad');
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);

    const handleSuggestCrops = () => {
        if (!soilType || !season || !location) {
            setError('Please select soil type, season, and location.');
            setSuggestions([]);
            return;
        }
        setError(null);

        const matchingCrops = cropData.find(
            (crop) =>
                crop.soilType === soilType &&
                crop.season === season &&
                crop.location === location
        );

        if (matchingCrops) {
            setSuggestions(matchingCrops.crops);
        } else {
            setSuggestions([]);
            setError('No matching crop suggestions found. Please try different inputs.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-50 p-4 flex items-center justify-center">
            <div className="w-full max-w-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-green-700 mb-2">Crop Suggestions</h2>
                    <p className="text-gray-600">
                        Select soil type, season, and location to get tailored crop recommendations.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
                    <div className="mb-4">
                        <label htmlFor="soilType" className="block text-gray-700 text-sm font-bold mb-2">
                            Soil Type:
                        </label>
                        <select
                            id="soilType"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={soilType}
                            onChange={(e) => setSoilType(e.target.value)}
                        >
                            <option value="">Select soil type</option>
                            {soilTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="season" className="block text-gray-700 text-sm font-bold mb-2">
                            Season:
                        </label>
                        <select
                            id="season"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                        >
                            <option value="">Select season</option>
                            {seasons.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                            District:
                        </label>
                        <select
                            id="location"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select district</option>
                            {districts.map((district) => (
                                <option key={district} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={handleSuggestCrops}
                        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
                    >
                        Suggest Crops
                    </button>

                    {error && (
                        <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error: </strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    {suggestions.length > 0 && (
                        <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                            <h3 className="text-xl font-semibold mb-4 text-green-700">Recommended Crops:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                {suggestions.map((crop, index) => (
                                    <li key={index} className="text-gray-800 font-medium">
                                        {crop}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="text-center text-sm text-gray-500 mt-4">
                    <p>
                        <strong>Note:</strong> This tool provides general crop suggestions.  Always consider local
                        conditions and consult with agricultural experts for the most accurate advice.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CropSuggestions;
