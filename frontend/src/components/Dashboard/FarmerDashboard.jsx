import React, { useState } from 'react';
import Weather from '../Weather/Weather';
import CropPrices from '../cropprices';
import GovtSchemes from '../GovtSchemes';
import Marketplace from '../Marketplace';
import VoiceAssistant from '../VoiceAssistant';
import DiseaseDetection from '../DiseaseDetection';
import CropSuggestions from '../CropSuggestions';

const FarmerDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('weather');

  const renderContent = () => {
    switch (selectedSection) {
      case 'weather':
        return <Weather/>;
      case 'prices':
        return <CropPrices/>;
      case 'disease':
       return <DiseaseDetection/>;
      case 'schemes':
        return <GovtSchemes/>;
        case 'suggestion':
        return <CropSuggestions/>;
      case 'marketplace':
        return <Marketplace/>;
      case 'voice':
        return <VoiceAssistant/>;
      default:
        return <p>Select a section from the menu.</p>;
    }
  };

  return (
    <div className="flex min-h-screen text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-6">🌾 RaithuBuddy</h1>
        <nav className="flex flex-col space-y-2">
          <button onClick={() => setSelectedSection('weather')} className="hover:bg-green-600 p-2 rounded">Weather</button>
          <button onClick={() => setSelectedSection('prices')} className="hover:bg-green-600 p-2 rounded">Crop Prices</button>
          <button onClick={() => setSelectedSection('disease')} className="hover:bg-green-600 p-2 rounded">Disease Detection</button>
          <button onClick={() => setSelectedSection('schemes')} className="hover:bg-green-600 p-2 rounded">Govt. Schemes</button>
          <button onClick={() => setSelectedSection('suggestion')} className="hover:bg-green-600 p-2 rounded">Crop Suggestions</button>
          <button onClick={() => setSelectedSection('marketplace')} className="hover:bg-green-600 p-2 rounded">Marketplace</button>
          <button onClick={() => setSelectedSection('voice')} className="hover:bg-green-600 p-2 rounded">Voice Assistant</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="mb-4">
          <h2 className="text-2xl font-semibold">Welcome back, Farmer!</h2>
          <p className="text-gray-600">Today: {new Date().toLocaleDateString()}</p>
        </header>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default FarmerDashboard;
