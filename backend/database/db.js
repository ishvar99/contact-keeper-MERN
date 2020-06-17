const mongoose = require('mongoose');
const uri = 'mongodb://localhost/contacts-keeper' || process.env.databaseUrl;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log('Database connected successfully!');
  }
);
