const express = require('express');
const router = express.Router();
const autreController = require('../../../controller/espace_contribuable/autreController');

router.route('/')
    .post(autreController.setAutres);

module.exports = router;