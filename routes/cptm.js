const express = require('express');
const routes = express.Router();

const CptmController = require('../controllers/CptmController');

routes.get('/status', CptmController.getAllStatus);
routes.get('/status/:linha', CptmController.getLineStatus);

module.exports = routes;