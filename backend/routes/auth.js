const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');
const router = express.Router();
const secret = process.env.secret;
// @route  POST api/auth
// @desc   register a user
// @access PUBLIC
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) return res.json({ err: 'name is required!' });
  if (!email) return res.json({ err: 'email is required!' });
  if (!password) return res.json({ err: 'password is required!' });
  if (password.length < 6)
    return res.json({ err: 'password should be minimum 6 characters' });
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ err: 'email already exists' });
    }
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    user = await User.create({ name, email, password });
    let token = jwt.sign({ id: user._id }, secret, { expiresIn: '2h' });
    user.password = hash;
    await user.save();
    res.json({ token });
  } catch (err) {
    return res.status(500).json({ err: 'Server Error' });
  }
});

// @route  POST api/auth
// @desc   login a user
// @access PUBLIC
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.json({ err: 'email is required!' });
  if (!password) return res.json({ err: 'password is required!' });
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.json({ err: 'invalid credentials' });
    }
    let response = await bcrypt.compare(password, user.password);
    let token = jwt.sign({ id: user._id }, secret, { expiresIn: '2h' });
    if (response) {
      res.status(200).json({ token });
    } else {
      res.status(422).json({ err: 'invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ err: 'server error' });
  }
});

// @route  GET api/auth
// @desc   get logged in user
// @access PRIVATE
router.get('/login', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    res.json(user);
  } catch (err) {
    return res.json({ err: 'server error' });
  }
});
module.exports = router;
