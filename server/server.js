const express = require('express');
const app = express();
const path = require('path');
const { main } = require('./scraper.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/scrape', async (req, res) => {
  const data = await main();
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
