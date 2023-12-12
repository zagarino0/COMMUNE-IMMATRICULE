const express = require('express');
const router = express.Router();
const activiteController = require('../../../controller/espace_contribuable/activiteController');

router.route('/')
    .post(activiteController.setActivite);

module.exports = router;