const express = require('express');

const router = express.Router();

// @route  POST api/auth
// @desc   register a user
// @access PUBLIC
router.post('/register', (req, res) => {
  res.send('Register a user');
});

// @route  POST api/auth
// @desc   login a user
// @access PUBLIC
router.post('/login', (req, res) => {
  res.send('login a user');
});

// @route  GET api/auth
// @desc   get logged in user
// @access PRIVATE
router.get('/login', (req, res) => {
  res.send('get a logged in user!');
});
