const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');
const auth = require('../middleware/auth');

// Get all listings
router.get('/', async (req, res) => {
  const items = await Listing.find().populate('seller', 'name email');
  res.json(items);
});

// Create listing (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const listing = new Listing({ title, description, price, seller: req.user.id });
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete listing
router.delete('/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Not found' });
    if (listing.seller.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
    await listing.remove();
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
