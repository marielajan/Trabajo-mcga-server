const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personal');
module.exports = () => {
  router.get('/All', personalController.getAllPersonal);
  router.get('/:personalId', personalController.getPersonalById);
  router.delete('/:personalId', personalController.deletePersonal);
  router.post('/', personalController.addNewPersonal);
  router.put('/', personalController.updatePersonal);

  return router;
};
