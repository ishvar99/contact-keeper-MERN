const mongoose = require('mongoose');
const validator = require('validator');
const User = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    validate: (val) => validator.isEmail(val),
  },
  password: {
    required: true,
    minlength: 6,
    type: String,
  },
});
