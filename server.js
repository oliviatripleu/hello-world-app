const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 51684;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Frame-Options', 'ALLOWALL');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
