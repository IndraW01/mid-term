const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const VideoThumbnail = mongoose.model('VideoThumbnail', {
  videoID: String,
  imageUrl: String,
});

const Product = mongoose.model('Product', {
  videoID: String,
  productID: String,
  link: String,
  title: String,
  price: String,
});

const Comment = mongoose.model('Comment', {
  videoID: String,
  username: String,
  comment: String,
  timestamp: { type: Date, default: Date.now },
});

app.get('/video-thumbnails', async (req, res) => {
  try {
    const thumbnails = await VideoThumbnail.find();
    res.json(thumbnails);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/products/:videoID', async (req, res) => {
  try {
    const { videoID } = req.params;
    const products = await Product.find({ videoID });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/comments/:videoID', async (req, res) => {
  try {
    const { videoID } = req.params;
    const comments = await Comment.find({ videoID });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/submit-comment', async (req, res) => {
  try {
    const { username, comment, videoID } = req.body;
    const newComment = new Comment({ username, comment, videoID });
    await newComment.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
