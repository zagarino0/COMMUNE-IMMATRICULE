const express = require('express');
const router = express.Router();
const activiteController = require('../../../controller/espace_contribuable/activiteController');

router.route('/')
    .post(activiteController.setActivite);

router.route('/:id_activite')
    .get(activiteController.getActiviteById)
    .put(activiteController.updateActivite);

router.route('/contribuable/:id_contribuable')
    .get(activiteController.getActiviteByIdContribuable);

router.route('/avalide/:id_activite')
    .put(activiteController.updateActiviteAValide);

router.route('/contribuable/:id_activite')
    .put(activiteController.updateActiviteByContribuable);

module.exports = router;