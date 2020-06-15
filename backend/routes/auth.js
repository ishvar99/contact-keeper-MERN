const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
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
    let token = jwt.sign({ id: user._id }, secret);
    user.token = token;
    user.password = hash;
    await user.save();
    let alteredUser = _.pick(user, ['_id', 'name', 'email', 'token']);
    res.setHeader('x-auth', token);
    res.json({ user: alteredUser });
  } catch (err) {
    return res.json({ err: err });
  }
});

// @route  POST api/auth
// @desc   login a user
// @access PUBLIC
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let token = req.header('x-auth');
  let decoded = jwt.verify(token, secret);
  let user = await User.findOne({ email });
  if (!user) {
    return res.json({ err: 'Invalid Email!' });
  }
  let response = await bcrypt.compare(password, user.password);
  if (decoded.id == user._id && response) {
    let alteredUser = _.pick(user, ['_id', 'name', 'email', 'token']);
    res.status(200).json({ user: alteredUser });
  } else {
    res.status(422).json({ err: 'Invalid Password!' });
  }
});

// @route  GET api/auth
// @desc   get logged in user
// @access PRIVATE
router.get('/login', (req, res) => {
  res.send('get a logged in user!');
});
module.exports = router;
