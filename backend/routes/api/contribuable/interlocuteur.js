const express = require('express');
const router = express.Router();
const interlocuteurController = require('../../../controller/espace_contribuable/interlocuteurController');

router.route('/')
    .post(interlocuteurController.setInterlocuteur);

router.route('/:id_interlocuteur')
    .get(interlocuteurController.getInterlocuteurById)
    .put(interlocuteurController.updateInterlocuteur);

router.route('/contribuable/:id_contribuable')
    .get(interlocuteurController.getInterlocuteurByIdContribuable);

router.route('/avalide/:id_interlocuteur')
    .put(interlocuteurController.updateInterlocuteurAValide);

module.exports = router;