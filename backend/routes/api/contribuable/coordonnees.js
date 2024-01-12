const express = require('express');
const router = express.Router();
const coordonneesController = require('../../../controller/espace_contribuable/coordonneeController');

router.route('/')
    .post(coordonneesController.setCoordonnees);

router.route('/:id_contribuable')
    .get(coordonneesController.getCoordonneesByIdContribuable);

router.route('/:id_coordonnee')
    .get(coordonneesController.getCoordonneesById)
    .put(coordonneesController.updateCoordonnees);

module.exports = router;