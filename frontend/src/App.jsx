import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import './App.css';

const FarmerDashboard = React.lazy(() => import('./components/Dashboard/FarmerDashboard'));
const CropSuggestions = React.lazy(() => import('./components/CropSuggestions'));
const DiseaseDetection = React.lazy(() => import('./components/DiseaseDetection'));
const GovtSchemes = React.lazy(() => import('./components/GovtSchemes'));
const Marketplace = React.lazy(() => import('./components/Marketplace'));
const VoiceAssistant = React.lazy(() => import('./components/VoiceAssistant'));
const Weather = React.lazy(() => import('./components/Weather/Weather'));
const CropPrices = React.lazy(() => import('./components/CropPrices/CropPrices'));
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
    <React.Suspense fallback={<div className="hero card">Loading…</div>}>
      <header className="clean-header app-container sticky-nav">
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
          <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
            <div className="site-logo" style={{fontWeight:900,color:'var(--accent)'}}>🌾</div>
            <div className="site-title">RaithuBuddy</div>
          </div>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="app-container">
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
      </main>

      {/* VoiceAssistant is available inside the dashboard only after login */}

      <footer className="app-footer app-container muted">Built for farmers • RaithuBuddy © {new Date().getFullYear()}</footer>

    </React.Suspense>
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

