const mongoose = require('mongoose');
const validator = require('validator');
const contactSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    validate: (val) => validator.isEmail(val),
  },
  phone: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('Contact', contactSchema);
