const express = require('express');
const router = express.Router();
const coordonneesController = require('../../../controller/espace_contribuable/coordonneeController');

router.route('/')
    .post(coordonneesController.setCoordonnees);

module.exports = router;