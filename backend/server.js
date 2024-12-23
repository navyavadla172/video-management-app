require('dotenv').config();  // Load environment variables from the .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Access MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Access JWT_SECRET and other Google credentials
const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// Middleware
app.use(cors());
app.use(express.json());

// Define routes (example)
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
