import React, { useState } from 'react';
import Weather from '../Weather/Weather';
import CropPrices from '../CropPrices/CropPrices';
import GovtSchemes from '../GovtSchemes';
import Marketplace from '../Marketplace';
import VoiceAssistant from '../VoiceAssistant';
import DiseaseDetection from '../DiseaseDetection';
import CropSuggestions from '../CropSuggestions';
import { motion } from 'framer-motion'; // Import for animations

const FarmerDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('weather');

  const renderContent = () => {
    switch (selectedSection) {
      case 'weather':
        return <Weather />;
      case 'prices':
        return <CropPrices />;
      case 'disease':
        return <DiseaseDetection />;
      case 'schemes':
        return <GovtSchemes />;
      case 'suggestion':
        return <CropSuggestions />;
      case 'marketplace':
        return <Marketplace />;
      case 'voice':
        return <VoiceAssistant />;
      default:
        return <p>Select a section from the menu.</p>;
    }
  };

  const navItems = [
    { name: 'Weather', value: 'weather' },
    { name: 'Crop Prices', value: 'prices' },
    { name: 'Disease Detection', value: 'disease' },
    { name: 'Govt. Schemes', value: 'schemes' },
    { name: 'Crop Suggestions', value: 'suggestion' },
    { name: 'Marketplace', value: 'marketplace' },
    { name: 'Voice Assistant', value: 'voice' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-green-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <motion.h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setSelectedSection('weather')} // Go to default section on logo click
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            🌾 RaithuBuddy
          </motion.h1>
          <div className="space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.value}
                onClick={() => setSelectedSection(item.value)}
                className={`hover:bg-green-600 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  selectedSection === item.value ? 'bg-green-600' : ''
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <motion.main
        className="container mx-auto p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <header className="mb-6">
          <motion.h2
            className="text-3xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Welcome back, Farmer!
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Today: {new Date().toLocaleDateString()}
          </motion.p>
        </header>
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </motion.main>
    </div>
  );
};

export default FarmerDashboard;