const mongoose = require('mongoose');
const Video = require('./models/Video'); // Adjust path if needed

mongoose.connect('mongodb://localhost:27017/videoDB', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database connected');
  
  // Log before inserting
  console.log('Inserting data...');

  return Video.insertMany([
    {
      title: 'Sample Video',
      description: 'This is a test video.',
      url: 'http://example.com/video',
    },
    {
      title: 'Another Video',
      description: 'Another description.',
      url: 'http://example.com/another-video',
    },
  ]);
})
.then((docs) => {
  // Log after inserting
  console.log('Videos inserted:', docs);
})
.catch((error) => {
  console.error('Error:', error);
});
