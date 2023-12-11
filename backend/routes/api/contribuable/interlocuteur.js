const express = require('express');
const router = express.Router();
const interlocuteurController = require('../../../controller/espace_contribuable/interlocuteurController');

router.route('/')
    .post(interlocuteurController.setInterlocuteur);

module.exports = router;