const express = require('express');
const routes = express.Router();

const MetroController = require('../controllers/MetroStatusController');

routes.get('/status', MetroController.getAllStatus);
routes.get('/status/:linha', MetroController.getLineStatus);

module.exports = routes;