const express = require('express');
const router = express.Router();
const actionnaireController = require('../../../controller/espace_contribuable/actionnaireController');

router.route('/')
    .post(actionnaireController.setActionnaire);

router.route('/:id_actionnaire')
    .get(actionnaireController.getActionnaireById)
    .put(actionnaireController.updateActionnaire);

router.route('/contribuable/:id_contribuable')
    .get(actionnaireController.getActionnaireByIdContribuable);

router.route('/avalide/:id_actionnaire')
    .put(actionnaireController.updateActionnaireNonValide);

module.exports = router;