const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
// Replace the URL with your MongoDB connection string
mongoose.connect('mongodb://localhost:27017/video_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Database connected');
})
.catch(err => {
  console.log('Database connection error:', err);
});

module.exports = mongoose;  // Export mongoose to be used in other parts of the app
