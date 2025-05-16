import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Hyderabad"); // default

  const API_KEY = "c4874b4771da142e275dd81c5b51b4b2";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
         console.log(res.data);
        setWeather(res.data);
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    };
    fetchWeather();
  }, [location]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">🌦️ Weather Information</h2>
      <input
        className="border p-2 rounded mb-4"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location"
      />
      {weather ? (
        <div>
          <p><strong>Location:</strong> {weather.name}</p>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
