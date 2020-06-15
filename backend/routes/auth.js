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
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      User.create({ name, email, password }, (err, user) => {
        if (!err) {
          var token = jwt.sign({ id: user._id }, secret);
          user.token = token;
          user.password = hash;
          user.save();
          const alteredUser = _.pick(user, ['_id', 'name', 'email', 'token']);
          res.setHeader('x-auth', token);
          res.json({ user: alteredUser });
        } else {
          res.status(400).json({ err });
        }
      });
    });
  });
});

// @route  POST api/auth
// @desc   login a user
// @access PUBLIC
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const token = req.header('x-auth');
  const decoded = jwt.verify(token, secret);
  User.findOne({ email: email }, (err, user) => {
    if (!err) {
      bcrypt.compare(password, user.password, function (err, response) {
        if (decoded.id == user._id && response) {
          const alteredUser = _.pick(user, ['_id', 'name', 'email', 'token']);
          res.status(200).json({ user: alteredUser });
        } else {
          res.status(422).json({ err: 'Authentication Failed!' });
        }
      });
    } else {
      res.status(422).json({ err: 'Authentication Failed!' });
    }
  });
});

// @route  GET api/auth
// @desc   get logged in user
// @access PRIVATE
router.get('/login', (req, res) => {
  res.send('get a logged in user!');
});
module.exports = router;
