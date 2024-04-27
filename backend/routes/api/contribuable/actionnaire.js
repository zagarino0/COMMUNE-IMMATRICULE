const express = require('express');
const router = express.Router();
const actionnaireController = require('../../../controller/espace_contribuable/actionnaireController');

router.route('/')
    .post(actionnaireController.setActionnaire);

router.route('/avalide')
    .post(actionnaireController.setOneActionnaireNonValide);

router.route('/:id')
    .get(actionnaireController.getActionnaireById)
    .put(actionnaireController.updateActionnaire)
    .delete(actionnaireController.deleteOneActionnaireNonValide);

router.route('/contribuable/:id_contribuable')
    .get(actionnaireController.getActionnaireByIdContribuable);

router.route('/avalide/:id')
    .put(actionnaireController.updateActionnaireNonValide);

router.route('/contribuable/:id')
    .put(actionnaireController.updateActionnaireByContribuable)

module.exports = router;