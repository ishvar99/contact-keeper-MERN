const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();
const secret = process.env.secret;
// @route  POST api/auth
// @desc   register a user
// @access PUBLIC
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  User.create({ name, email, password }, (err, user) => {
    var token = jwt.sign({ id: user._id }, secret);
    user.token = token;
    user.save();
    res.json({ user });
  });
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
module.exports = router;
