const mongoose = require('mongoose');
const personalSchema = new mongoose.Schema({

  nombre: {
    type: String,
    required: 'El nombre y apellido es requerido.',
    trim: true,
  },
  email: {
    type: String,
    required: 'El email es requerido',
    lowercase: true,
  },

  // password: {
  //   type: String,
  //   required: 'El password es requerido',
  //   lowercase: true,
  // },

  // ciudad: {
  //   type: String,
  //   required: 'La ciudad es requerida.',
  //   trim: true,
  // },

  // direccion: {
  //   type: String,
  //   required: 'La direccion es requerida.',
  //   trim: true,
  // },
  
  estado: {
    type: String,
    required: 'El estado es requerido',
    trim: true,
  },
});

module.exports = mongoose.model('personal', personalSchema);

