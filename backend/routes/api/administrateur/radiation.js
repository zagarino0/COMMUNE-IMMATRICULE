const express = require('express');
const router = express.Router();
const radiationController = require('../../../controller/espace_administrateur/radiationController');

router.route('/')
    .post(radiationController.setRadiation);

router.route('/:id_radiation')
    .get(radiationController.getRadiationById);

router.route('/categories')
    .post(radiationController.consultationradiation);

module.exports = router;