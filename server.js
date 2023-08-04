const express = require('express');
const app = express();
const path = require('path');
const { main } = require('./scrape.js');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/scrape', async (_req, res) => {
  const data = await main();
  res.json(data);
});

const host = 'localhost';
const port = 3000

app.listen(port, host,() => {
  console.log(`Server listening on http://${host}:${port}`);
});
