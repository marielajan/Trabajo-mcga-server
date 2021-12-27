const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
mongoose
  .connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log(`Database: Gestión Personal ~ Online`);
  })
  .catch((e) => {
    console.error(e);
  });

// Import Models Here.

const personal = require('../models/personal');
const user = require('../models/user'); 
