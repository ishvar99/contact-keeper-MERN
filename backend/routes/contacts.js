const express = require('express');
const User = require('../models/user.js');
const Contact = require('../models/contact.js');
const auth = require('../middlewares/auth');
const router = express.Router();

// @route  POST api/contacts
// @desc   display all contacts for a user
// @access PRIVATE
router.get('/', auth, async (req, res) => {
  const contacts = await Contact.find({ user: req.user }).sort({ date: -1 });
  res.json(contacts);
});

// @route  POST api/contacts
// @desc   add a contact
// @access PRIVATE
router.post('/', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;
  console.log('response body', req.body);
  try {
    const contact = await Contact.create({ name, email, phone, type });
    contact.user = req.user;
    await contact.save();
    res.json(contact);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: 'server error' });
  }
});

// @route  PUT api/contacts
// @desc   update a contact
// @access PRIVATE
router.put('/:id', async (req, res) => {
  let { name, email, phone, type } = req.body;
  let contact = await Contact.findById(req.params.id);
  const updatedData = {
    name: name ? name : contact.name,
    email: email ? email : contact.email,
    phone: phone ? phone : contact.phone,
    type: type ? type : contact.type,
  };
  try {
    contact = await Contact.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });
    res.json(contact);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: 'server error' });
  }
});

// @route  DELETE api/contacts
// @desc   delete a contact
// @access PRIVATE
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: `${req.params.id} removed` });
  } catch (error) {
    res.status(500).json({ err: 'server error' });
  }
});

module.exports = router;
