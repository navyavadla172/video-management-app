// videoRoutes.js (Backend)
const express = require('express');
const Video = require('../models/Video');  // Import your Video model
const router = express.Router();

// Route to get all videos
router.get('/videos', async (req, res) => {
  try {
    // Fetch videos from the database
    const videos = await Video.find();
    res.json(videos);  // Send the videos as a response
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ message: 'Error fetching videos' });
  }
});

module.exports = router;
