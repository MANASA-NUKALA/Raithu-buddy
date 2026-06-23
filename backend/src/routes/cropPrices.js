const express = require('express');
const router = express.Router();
const CropPrice = require('../models/CropPrice');
const auth = require('../middleware/auth');

// Get latest crop prices
router.get('/', async (req, res) => {
  const prices = await CropPrice.find().sort({ date: -1 }).limit(100);
  res.json(prices);
});

// Add price (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { crop, market, price } = req.body;
    const cp = new CropPrice({ crop, market, price });
    await cp.save();
    res.status(201).json(cp);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
