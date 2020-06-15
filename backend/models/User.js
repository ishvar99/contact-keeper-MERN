const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    required: [true, 'name is required'],
    type: String,
  },
  email: {
    required: [true, 'email is required'],
    unique: true,
    type: String,
    validate: {
      validator: (value) => validator.isEmail(value),
    },
  },
  password: {
    required: [true, 'password is required'],
    minlength: [6, 'password should be minimum 6 characters'],
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
