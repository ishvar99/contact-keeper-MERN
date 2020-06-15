const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    required: [true, 'name is required'],
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
