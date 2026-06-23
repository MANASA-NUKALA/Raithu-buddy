const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Simple proxy to Open-Meteo
router.get('/', async (req, res) => {
  try {
    const { lat, lon, params } = req.query;
    if (!lat || !lon) return res.status(400).json({ message: 'lat and lon required' });

    const url = `${process.env.OPEN_METEO_URL}?latitude=${encodeURIComponent(lat)}&longitude=${encodeURIComponent(lon)}&hourly=temperature_2m,precipitation&current_weather=true`;
    const r = await fetch(url);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Weather proxy error' });
  }
});

module.exports = router;
