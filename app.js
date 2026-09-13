const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello! This app was deployed automatically by Jenkins');
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});