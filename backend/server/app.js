require('dotenv');
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('HELLO WORLD!');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
