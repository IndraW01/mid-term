const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/video_thumbnail_db';
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports = db;
