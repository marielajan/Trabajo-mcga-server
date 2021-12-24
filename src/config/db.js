const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database: GestionRRHH ~ Online`);
  })
  .catch((e) => {
    console.error(e);
  });

// Import Models Here.

const user = require('../models/personal');
