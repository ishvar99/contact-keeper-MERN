const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
    validate: {
      validator: (value) => validator.isEmail(value),
    },
  },
  password: {
    required: true,
    minlength: 6,
    type: String,
  },
  token: {
    type: String,
  },
  contacts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
