require('dotenv').config();  // Load environment variables from the .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Mock MongoDB connection (remove actual MongoDB connection)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mockdb'; // Mock connection

// Mock MongoDB connection (to simulate the connection without using actual MongoDB)
const mockDatabase = []; // Simple array to simulate a database

// MongoDB connection simulation
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connected (mock)');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Access JWT_SECRET from environment variables or use a dummy key
const JWT_SECRET = process.env.JWT_SECRET || 'dummy-secret-key';

// Middleware
app.use(cors());
app.use(express.json());

// Define routes (example)
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example route to simulate database interaction
app.get('/videos', (req, res) => {
  res.json(mockDatabase); // Return mock data
});

// Server start
const PORT = process
