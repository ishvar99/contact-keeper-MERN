require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
require('../database/db');
const contactRoutes = require('../routes/contacts');
const authRoutes = require('../routes/auth');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('WELCOME TO CONTACTS KEEPER');
});
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
