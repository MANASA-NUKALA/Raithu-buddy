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
    <div className="min-h-screen">
      <nav className="clean-card" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem'}}>
        <motion.h1 className="site-title" onClick={() => setSelectedSection('weather')} whileHover={{ scale: 1.02 }}>
          RaithuBuddy
        </motion.h1>
        <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
          {navItems.map((item) => (
            <motion.button
              key={item.value}
              onClick={() => setSelectedSection(item.value)}
              className={`clean-btn ${selectedSection === item.value ? '' : ''}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </nav>

      <motion.main className="container mx-auto p-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <header className="mb-6">
          <motion.h2 className="text-3xl font-semibold text-gray-800 mb-2" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.3 }}>
            Welcome back, Farmer!
          </motion.h2>
          <motion.p className="text-gray-600" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }}>
            Today: {new Date().toLocaleDateString()}
          </motion.p>
        </header>

        <motion.div className="clean-card" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
          {renderContent()}
        </motion.div>
      </motion.main>
    </div>
  );
};

export default FarmerDashboard;