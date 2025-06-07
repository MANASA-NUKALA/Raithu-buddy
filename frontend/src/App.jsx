import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import LandingPage from './pages/Landingpage';
import FarmerDashboard from './components/Dashboard/FarmerDashboard';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import CropSuggestions from './components/CropSuggestions';
import DiseaseDetection from './components/DiseaseDetection';
import GovtSchemes from './components/GovtSchemes';
import Marketplace from './components/Marketplace';
import VoiceAssistant from './components/VoiceAssistant';
import Weather from './components/Weather/Weather';
import CropPrices from './components/CropPrices/CropPrices';
import './App.css';

// ✅ Main app content with navigation handling
function AppContent() {
  const navigate = useNavigate();

  const handleCommand = (command) => {
  if (!command) return;
  const cmd = command.toLowerCase();

  if (cmd.includes('వాతావరణ') || cmd.includes('వాతావరణం')) {
    navigate('/weather');
  } else if (cmd.includes('పంట రేటు') || cmd.includes('పంట రేట్లు') || cmd.includes('క్రాప్ ప్రైస్')) {
    navigate('/cropprices');
  } else if (cmd.includes('హోమ్') || cmd.includes('ప్రధాన పేజీ') || cmd.includes('ఇంటికి')) {
    navigate('/');
  } else if (cmd.includes('పంట సూచన') || cmd.includes('క్రాప్ సజెషన్')) {
    navigate('/cropsuggestions');
  } else if (cmd.includes('వ్యాధి గుర్తింపు')) {
    navigate('/diseasedetection');
  } else if (cmd.includes('పథకాలు') || cmd.includes('సర్కార్ పథకం')) {
    navigate('/govtschemes');
  } else if (cmd.includes('మార్కెట్') || cmd.includes('అమ్మకం')) {
    navigate('/marketplace');
  } else if (cmd.includes('వెనక్కి') || cmd.includes('బ్యాక్') || cmd.includes('తిరిగి')) {
    navigate(-1);  // Go back to previous page
  } else {
    alert('క్షమించండి, ఆ ఆదేశం నాకు అర్థం కాలేదు.');
  }
};


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/cropprices" element={<CropPrices />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path="/cropsuggestions" element={<CropSuggestions />} />
        <Route path="/diseasedetection" element={<DiseaseDetection />} />
        <Route path="/govtschemes" element={<GovtSchemes />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <VoiceAssistant handleCommand={handleCommand} />
    </>
  );
}

// ✅ Exporting the wrapped Router
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
