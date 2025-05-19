import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './App.css';
import CropPrices from './components/CropPrices/CropPrices';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path="/weather" element={<Weather/>}/>
        <Route path="/cropprices" element={<CropPrices />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path='/cropsuggestions' element={<CropSuggestions />} />
        <Route path="/diseasedetection" element={<DiseaseDetection />} />
        <Route path="/govtschemes" element={<GovtSchemes />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/voiceassistant" element={<VoiceAssistant />} />
      </Routes>   
    </Router>
  );
}

export default App;
