import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-green-50 flex flex-col items-center justify-center">
      <header className="text-4xl font-bold text-green-700 mb-4">
        RaithuBuddy 🌾
      </header>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md px-4">
        Empowering Farmers with AI, Weather Alerts, Market Prices, and More!
      </p>
      <div className="flex space-x-4">
       
        

         <Link to="/dashboard">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            farmers dashboard
          </button>
        </Link>

      </div>
    </div>
  );
};

export default LandingPage;
