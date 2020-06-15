const express = require('express');
const User = require('../models/user.js');
const contact = require('../models/contact.js');
const auth = require('../middlewares/auth');
const router = express.Router();

// @route  POST api/contacts
// @desc   display all contacts for a user
// @access PRIVATE
router.get('/', auth, async (req, res) => {
  const contacts = await contact.find({ user: req.user });
  res.json(contacts);
});

// @route  POST api/contacts
// @desc   add a contact
// @access PRIVATE
router.post('/', (req, res) => {
  res.send('add a contact');
});

// @route  PUT api/contacts
// @desc   update a contact
// @access PRIVATE
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @route  DELETE api/contacts
// @desc   delete a contact
// @access PRIVATE
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
