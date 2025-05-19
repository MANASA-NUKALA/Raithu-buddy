import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('Hyderabad'); // default
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "c4874b4771da142e275dd81c5b51b4b2";

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        console.log(res.data);
        setWeather(res.data);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError("Could not fetch weather data for this location.");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [location]);

  const containerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };

  const inputVariants = {
    initial: { scale: 0.9 },
    animate: { scale: 1 },
    transition: { type: 'spring', stiffness: 100 },
  };

  const weatherInfoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: 0.2 },
  };

  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl shadow-md"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
        <motion.span
          className="mr-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          🌦️
        </motion.span>
        Weather Information
      </h2>
      <motion.input
        className="border p-3 rounded-md mb-4 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800" // Changed text color here
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location (e.g., Hyderabad)"
        variants={inputVariants}
        initial="initial"
        animate="animate"
      />
      {loading && (
        <motion.p className="text-gray-600 italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Fetching weather...
        </motion.p>
      )}
      {error && (
        <motion.p className="text-red-500">{error}</motion.p>
      )}
      {weather && (
        <motion.div
          className="mt-6 p-4 bg-white rounded-md shadow-sm border border-gray-200"
          variants={weatherInfoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="text-lg text-gray-800 mb-2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <strong className="font-semibold">Location:</strong> {weather.name}
          </motion.p>
          <motion.p className="text-lg text-gray-800 mb-2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
            <strong className="font-semibold">Temperature:</strong> {weather.main.temp}°C
          </motion.p>
          <motion.p className="text-lg text-gray-800 mb-2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <strong className="font-semibold">Condition:</strong> {weather.weather[0].description}
          </motion.p>
          <motion.p className="text-lg text-gray-800 mb-2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
            <strong className="font-semibold">Humidity:</strong> {weather.main.humidity}%
          </motion.p>
          <motion.p className="text-lg text-gray-800" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <strong className="font-semibold">Wind Speed:</strong> {weather.wind.speed} m/s
          </motion.p>
        </motion.div>
      )}
      {!weather && !loading && !error && (
        <motion.p className="text-gray-600 italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Enter a location to see the weather.
        </motion.p>
      )}
    </motion.div>
  );
};

export default Weather;